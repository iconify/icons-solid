import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w482_wbjc.css';
import '../../css/a/a0-ehlbuo.css';
import '../../css/z/zs0elrbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w482_wbjc"/><path class="a0-ehlbuo"/><path class="zs0elrbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-bold"} {...others} />);
}

export default Component;
