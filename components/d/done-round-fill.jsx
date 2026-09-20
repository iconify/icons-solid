import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/s/stzf_fbre.css';
import '../../css/r/r2u1268te.css';
import '../../css/q/qsa-o9l-x.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGPxlTnXWu" width="20" height="17" x="1" y="3" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="stzf_fbre"/><path clip-rule="evenodd" class="r2u1268te"/></mask><path clip-rule="evenodd" mask="url(#SVGPxlTnXWu)" class="qsa-o9l-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:done-round-fill"} {...others} />);
}

export default Component;
