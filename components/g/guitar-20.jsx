import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw2nm3b1a.css';
import '../../css/b/bib7mgb4o.css';
import '../../css/n/nidx4if6e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cw2nm3b1a"/><path class="bib7mgb4o"/><path class="nidx4if6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:guitar-20"} {...others} />);
}

export default Component;
