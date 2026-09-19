import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnewhdyog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnewhdyog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:train-ticket"} {...others} />);
}

export default Component;
