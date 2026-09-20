import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/w/wt2vw6bnd.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzd5vjbdu.css';
import '../../css/c/czevsmbir.css';
import '../../css/s/sdc8eobgo.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGXkvBFmaa" class="n1mjunbsu"><path class="wt2vw6bnd"/></mask><g class="ft5dv1b6b"><path class="nzd5vjbdu"/><path mask="url(#SVGXkvBFmaa)" class="czevsmbir"/><path clip-rule="evenodd" class="sdc8eobgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:nuclear"} {...others} />);
}

export default Component;
