import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na37jlbzx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="na37jlbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:html-five"} {...others} />);
}

export default Component;
