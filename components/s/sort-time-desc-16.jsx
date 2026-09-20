import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5snn3b0a.css';
import '../../css/e/ek3qulhkz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e5snn3b0a"/><path clip-rule="evenodd" class="ek3qulhkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-time-desc-16"} {...others} />);
}

export default Component;
