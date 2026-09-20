import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6-kq4cwx.css';
import '../../css/d/d3bnnkbfx.css';
import '../../css/b/b3ef9_bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6-kq4cwx"/><path class="d3bnnkbfx"/><path class="b3ef9_bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-figma-filled"} {...others} />);
}

export default Component;
