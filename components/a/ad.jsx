import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwetujbzv.css';
import '../../css/y/y2vqhhbzu.css';
import '../../css/h/hcfp9ebwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xwetujbzv"/><rect class="y2vqhhbzu"/><path class="hcfp9ebwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ad"} {...others} />);
}

export default Component;
