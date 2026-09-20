import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht7vchbfw.css';
import '../../css/e/ek3qulhkz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ht7vchbfw"/><path clip-rule="evenodd" class="ek3qulhkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-time-asc-16"} {...others} />);
}

export default Component;
