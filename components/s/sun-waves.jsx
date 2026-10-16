import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1ywazu1y.css';
import '../../css/z/z3ed83bqz.css';
import '../../css/p/pm8axf8uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 11.97 12.31)" class="n1ywazu1y"/><path class="z3ed83bqz"/><path class="pm8axf8uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-waves"} {...others} />);
}

export default Component;
