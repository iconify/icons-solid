import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btko0yb2v.css';
import '../../css/d/dhkiq4b-h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="btko0yb2v"/><path class="dhkiq4b-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nacelle-48-bold"} {...others} />);
}

export default Component;
