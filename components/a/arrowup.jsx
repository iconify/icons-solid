import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_554nb3a.css';
import '../../css/c/cxh3ar5_e.css';

const viewBox = {"width":9,"height":16};
const content = `<path class="f_554nb3a"/><path class="cxh3ar5_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:arrowup"} {...others} />);
}

export default Component;
