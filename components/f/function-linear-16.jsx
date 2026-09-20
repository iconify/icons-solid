import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7ev4k4sm.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b7ev4k4sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:function-linear-16"} {...others} />);
}

export default Component;
