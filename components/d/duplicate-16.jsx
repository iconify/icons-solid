import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihtyuhbtb.css';
import '../../css/b/bqil3cc3l.css';
import '../../css/s/svp354b9v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ihtyuhbtb"/><path clip-rule="evenodd" class="bqil3cc3l"/><path class="svp354b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:duplicate-16"} {...others} />);
}

export default Component;
