import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkzxgjbxv.css';
import '../../css/s/s8icty3sx.css';
import '../../css/x/x764eiwbe.css';
import '../../css/v/vgwhqfvxp.css';
import '../../css/b/b4ofd3okp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wkzxgjbxv"/><path class="s8icty3sx"/><path class="x764eiwbe"/><path class="vgwhqfvxp"/><path class="b4ofd3okp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tumbler-glass"} {...others} />);
}

export default Component;
