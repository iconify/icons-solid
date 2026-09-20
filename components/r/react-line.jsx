import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv4va0_8o.css';
import '../../css/p/pveq17viu.css';
import '../../css/v/vdh9--c9v.css';
import '../../css/a/afj5qubuj.css';
import '../../css/z/zidxzfb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv4va0_8o"/><path class="pveq17viu"/><path class="vdh9--c9v"/><path class="afj5qubuj"/><path class="zidxzfb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:react-line"} {...others} />);
}

export default Component;
