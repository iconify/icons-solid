import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rer0iiboj.css';
import '../../css/h/h0qds541f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rer0iiboj"/><path class="h0qds541f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:violin-16"} {...others} />);
}

export default Component;
