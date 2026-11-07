import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcsc5yb1p.css';
import '../../css/y/yftbzgjri.css';
import '../../css/e/elfm62bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcsc5yb1p"/><path class="yftbzgjri"/><path clip-rule="evenodd" class="elfm62bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-bold"} {...others} />);
}

export default Component;
