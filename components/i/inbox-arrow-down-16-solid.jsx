import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzevmeb7i.css';
import '../../css/q/q2sfcejqg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pzevmeb7i"/><path class="q2sfcejqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:inbox-arrow-down-16-solid"} {...others} />);
}

export default Component;
