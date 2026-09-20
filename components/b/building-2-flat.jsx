import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z19wo6b1w.css';
import '../../css/n/ncdws9bkj.css';
import '../../css/m/mwkcixlvb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z19wo6b1w"/><path class="ncdws9bkj"/><path clip-rule="evenodd" class="mwkcixlvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:building-2-flat"} {...others} />);
}

export default Component;
