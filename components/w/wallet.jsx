import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6nrzybab.css';
import '../../css/j/j0r_clpwb.css';
import '../../css/o/obesz9_hf.css';
import '../../css/v/v6-odob5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w6nrzybab"/><path class="j0r_clpwb"/><path class="obesz9_hf"/><path class="v6-odob5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wallet"} {...others} />);
}

export default Component;
