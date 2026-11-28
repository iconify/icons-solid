import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9qqs8b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9qqs8b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:home-info"} {...others} />);
}

export default Component;
