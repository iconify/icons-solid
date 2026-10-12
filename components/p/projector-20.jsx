import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi3_jwkbn.css';
import '../../css/z/zklarom7k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mi3_jwkbn"/><path class="zklarom7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:projector-20"} {...others} />);
}

export default Component;
