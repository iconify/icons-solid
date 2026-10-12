import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs7tw9bod.css';
import '../../css/y/yqfo4kn1i.css';
import '../../css/a/abdk55fmk.css';
import '../../css/n/nke2fdcqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hs7tw9bod"/><path class="yqfo4kn1i"/><path class="abdk55fmk"/><path class="nke2fdcqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sofa"} {...others} />);
}

export default Component;
