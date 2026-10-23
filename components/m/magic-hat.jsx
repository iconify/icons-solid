import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7bvc3bvm.css';
import '../../css/j/j2_0o_bfm.css';
import '../../css/t/txzg8cc3a.css';
import '../../css/o/odvy-rh_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7bvc3bvm"/><path class="j2_0o_bfm"/><ellipse transform="rotate(90 12 13.08)" class="txzg8cc3a"/><path class="odvy-rh_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:magic-hat"} {...others} />);
}

export default Component;
