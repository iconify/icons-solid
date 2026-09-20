import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saq9jgb9j.css';
import '../../css/q/qyfnmsb6o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="saq9jgb9j"/><path class="qyfnmsb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:drinking-water-15"} {...others} />);
}

export default Component;
