import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo9qf5b_i.css';
import '../../css/q/qp7bbshih.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lo9qf5b_i"/><path clip-rule="evenodd" class="qp7bbshih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-double-down-16"} {...others} />);
}

export default Component;
