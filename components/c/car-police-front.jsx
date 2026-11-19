import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5l0qfkfv.css';
import '../../css/b/bqre7cb6l.css';
import '../../css/e/e-mnjgbvj.css';
import '../../css/z/zkkwlgbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t5l0qfkfv"/><path class="bqre7cb6l"/><path class="e-mnjgbvj"/><path class="zkkwlgbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car-police-front"} {...others} />);
}

export default Component;
