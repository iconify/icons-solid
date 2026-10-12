import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/o/oyr60yb7q.css';
import '../../css/t/tkn0jlbsu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="oyr60yb7q"/><path class="tkn0jlbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-left-48-bold"} {...others} />);
}

export default Component;
