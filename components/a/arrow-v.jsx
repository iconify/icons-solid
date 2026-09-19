import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijj-5e42m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijj-5e42m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:arrow-v"} {...others} />);
}

export default Component;
