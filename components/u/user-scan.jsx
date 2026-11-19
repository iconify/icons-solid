import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmjx6bcyi.css';
import '../../css/a/a3rks6bvg.css';
import '../../css/i/islcllbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hmjx6bcyi"/><path class="a3rks6bvg"/><path clip-rule="evenodd" class="islcllbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-scan"} {...others} />);
}

export default Component;
