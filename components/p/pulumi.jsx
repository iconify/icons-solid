import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqy19wbvc.css';
import '../../css/q/qe0d046kd.css';
import '../../css/a/atzomcwel.css';

const viewBox = {"width":256,"height":271};
const content = `<path class="cqy19wbvc"/><path class="qe0d046kd"/><path class="atzomcwel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pulumi"} {...others} />);
}

export default Component;
