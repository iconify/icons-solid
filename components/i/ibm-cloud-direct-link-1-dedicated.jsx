import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmwkbjbqp.css';
import '../../css/s/s-t41px5f.css';
import '../../css/e/eq5e06oyl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jmwkbjbqp"/><path class="s-t41px5f"/><path class="eq5e06oyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-direct-link-1-dedicated"} {...others} />);
}

export default Component;
