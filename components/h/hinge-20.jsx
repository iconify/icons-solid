import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r06i5gaqp.css';
import '../../css/z/zk-ob16tw.css';
import '../../css/l/lhz7cds8r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r06i5gaqp"/><path class="zk-ob16tw"/><path class="lhz7cds8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hinge-20"} {...others} />);
}

export default Component;
