import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp9f-xbrm.css';
import '../../css/i/iuap837mw.css';
import '../../css/z/z9s3ayxol.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/qkto1acsj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gp9f-xbrm"/><path clip-rule="evenodd" class="iuap837mw"/><path class="z9s3ayxol"/><path class="xjfc-xbtr"/><path class="qkto1acsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ethereum-circle"} {...others} />);
}

export default Component;
