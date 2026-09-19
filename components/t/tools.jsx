import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5t20yy7y.css';
import '../../css/k/k662d66uk.css';
import '../../css/p/p1a-x02dg.css';
import '../../css/y/y8wsa_bcp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5t20yy7y"/><path class="k662d66uk"/><path class="p1a-x02dg"/><path class="y8wsa_bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:tools"} {...others} />);
}

export default Component;
