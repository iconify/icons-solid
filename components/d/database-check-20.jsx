import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py9jq5b2b.css';
import '../../css/k/k251r-bph.css';
import '../../css/p/pckuljbwu.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="py9jq5b2b"/><path class="k251r-bph"/><path class="pckuljbwu"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-check-20"} {...others} />);
}

export default Component;
