import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci5kv5b4d.css';
import '../../css/h/hd-ff83io.css';
import '../../css/z/zq_37wb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci5kv5b4d"/><path class="hd-ff83io"/><path class="zq_37wb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:secure-data-outlined"} {...others} />);
}

export default Component;
