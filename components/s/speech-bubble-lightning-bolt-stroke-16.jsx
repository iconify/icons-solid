import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2hgvfy9u.css';
import '../../css/n/n_obwdb-b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d2hgvfy9u"/><path class="n_obwdb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:speech-bubble-lightning-bolt-stroke-16"} {...others} />);
}

export default Component;
