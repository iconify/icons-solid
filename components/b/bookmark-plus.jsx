import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbrtfx9pu.css';
import '../../css/s/s9jq5ybcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbrtfx9pu"/><path class="s9jq5ybcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-plus"} {...others} />);
}

export default Component;
