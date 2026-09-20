import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoz3r3bes.css';
import '../../css/y/ycqomi9-f.css';
import '../../css/v/vvstocchj.css';
import '../../css/z/z9gopggrv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hoz3r3bes"/><path class="ycqomi9-f"/><path class="vvstocchj"/><circle class="z9gopggrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-gallery-ltr"} {...others} />);
}

export default Component;
