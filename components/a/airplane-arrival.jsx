import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2fqmcakj.css';
import '../../css/w/wif-y3bli.css';
import '../../css/e/eiqm-gbjn.css';
import '../../css/c/csiadobsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c2fqmcakj"/><path class="wif-y3bli"/><path class="eiqm-gbjn"/><path class="csiadobsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:airplane-arrival"} {...others} />);
}

export default Component;
