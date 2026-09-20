import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj-78ka4z.css';
import '../../css/y/yu6tuw6du.css';
import '../../css/j/jdtu_dbam.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oj-78ka4z"/><path class="yu6tuw6du"/><path class="jdtu_dbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layers-3-16"} {...others} />);
}

export default Component;
