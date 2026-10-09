import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnjcr8b9t.css';
import '../../css/f/f7_sevb3w.css';
import '../../css/a/a8x12iari.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cnjcr8b9t"/><path class="f7_sevb3w"/><path class="a8x12iari"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rcd-48-bold"} {...others} />);
}

export default Component;
