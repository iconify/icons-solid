import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1qhirzjm.css';
import '../../css/g/gxn3sqbis.css';
import '../../css/b/b6hcl2bem.css';
import '../../css/s/sxlyg7bpw.css';
import '../../css/k/kvdyyd79v.css';
import '../../css/h/hv6i9sbii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1qhirzjm"/><path class="gxn3sqbis"/><path class="b6hcl2bem"/><path class="sxlyg7bpw"/><path class="kvdyyd79v"/><path class="hv6i9sbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-vertical-bold"} {...others} />);
}

export default Component;
