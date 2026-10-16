import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flo9z28mp.css';
import '../../css/n/ntt7ilb9v.css';
import '../../css/k/kwk2estza.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="flo9z28mp"/><path class="ntt7ilb9v"/><path class="kwk2estza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:windmill"} {...others} />);
}

export default Component;
