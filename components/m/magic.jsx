import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/banyp_byo.css';
import '../../css/k/kk04ncb8k.css';
import '../../css/d/dssrzebmt.css';
import '../../css/p/pt94-ibub.css';
import '../../css/o/obvm_z7qw.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="banyp_byo"/><path clip-rule="evenodd" class="kk04ncb8k"/><path clip-rule="evenodd" class="dssrzebmt"/><path class="pt94-ibub"/><path class="obvm_z7qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:magic"} {...others} />);
}

export default Component;
