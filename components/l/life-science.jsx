import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8ay3nbeq.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="q8ay3nbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:life-science"} {...others} />);
}

export default Component;
