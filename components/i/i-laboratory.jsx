import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbtlfqbcg.css';
import '../../css/q/qoc3rw04c.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="kbtlfqbcg"/><path class="qoc3rw04c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-laboratory"} {...others} />);
}

export default Component;
