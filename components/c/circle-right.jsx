import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3c-6wbuu.css';
import '../../css/a/ali10ogyu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d3c-6wbuu"/><path class="ali10ogyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:circle-right"} {...others} />);
}

export default Component;
