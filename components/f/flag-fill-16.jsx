import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thk55vbks.css';
import '../../css/o/o6e3x-bef.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="thk55vbks"/><path class="o6e3x-bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:flag-fill-16"} {...others} />);
}

export default Component;
