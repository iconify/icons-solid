import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmt3q2buw.css';
import '../../css/q/qstrk3-9l.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="zmt3q2buw"/><path class="qstrk3-9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:direction-rtl-fill-12"} {...others} />);
}

export default Component;
