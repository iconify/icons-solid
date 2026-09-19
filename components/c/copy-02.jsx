import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r2cuxi1mh.css';
import '../../css/f/f7a9lcb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r2cuxi1mh"/><path class="f7a9lcb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:copy-02"} {...others} />);
}

export default Component;
