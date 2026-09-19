import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcq-3vtmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcq-3vtmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:three-stars"} {...others} />);
}

export default Component;
