import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu-gg3pdt.css';
import '../../css/m/mk0qhjb2t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vu-gg3pdt"/><path class="mk0qhjb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:report-filled"} {...others} />);
}

export default Component;
