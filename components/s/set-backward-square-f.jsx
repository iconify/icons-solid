import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp_1n0ejz.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="jp_1n0ejz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:set-backward-square-f"} {...others} />);
}

export default Component;
