import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfu-_rb2q.css';
import '../../css/o/oelqgjbgx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="tfu-_rb2q"/><path class="oelqgjbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:github"} {...others} />);
}

export default Component;
