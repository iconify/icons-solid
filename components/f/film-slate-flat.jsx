import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxns9jtwr.css';
import '../../css/u/ufjoo7b7a.css';
import '../../css/y/yp0apkmdu.css';
import '../../css/d/dxdb0jbkv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gxns9jtwr"/><path clip-rule="evenodd" class="ufjoo7b7a"/><path class="yp0apkmdu"/><path clip-rule="evenodd" class="dxdb0jbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:film-slate-flat"} {...others} />);
}

export default Component;
