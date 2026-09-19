import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fd-ahacbo.css';
import '../../css/j/joa4c8oic.css';
import '../../css/e/eaxacq3vs.css';
import '../../css/b/b8ccrhvkv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="fd-ahacbo"/><rect class="joa4c8oic"/><rect class="eaxacq3vs"/><rect class="b8ccrhvkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:apps"} {...others} />);
}

export default Component;
