import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_ywewmwy.css';
import '../../css/b/bpu3pf_te.css';
import '../../css/a/acj9dacdv.css';
import '../../css/n/npij_fllq.css';
import '../../css/v/vf2lioboq.css';
import '../../css/f/f1n7cebai.css';
import '../../css/q/qk9ol1b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_ywewmwy"/><circle class="bpu3pf_te"/><circle class="acj9dacdv"/><circle class="npij_fllq"/><circle class="vf2lioboq"/><circle class="f1n7cebai"/><circle class="qk9ol1b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:api-monetization"} {...others} />);
}

export default Component;
