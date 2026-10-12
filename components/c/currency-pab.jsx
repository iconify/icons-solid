import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7wjyvbxh.css';
import '../../css/s/s8g65hbry.css';
import '../../css/c/ch6gofp9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r7wjyvbxh"/><path class="s8g65hbry"/><path class="ch6gofp9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-pab"} {...others} />);
}

export default Component;
