import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc-ttvbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc-ttvbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:flag-alt-light"} {...others} />);
}

export default Component;
