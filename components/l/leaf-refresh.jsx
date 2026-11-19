import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ze2lqlboq.css';
import '../../css/s/sfr0hersd.css';
import '../../css/d/dnc2ux3uw.css';
import '../../css/l/l5grvjbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ze2lqlboq"/><path class="sfr0hersd"/><path class="dnc2ux3uw"/><path class="l5grvjbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:leaf-refresh"} {...others} />);
}

export default Component;
