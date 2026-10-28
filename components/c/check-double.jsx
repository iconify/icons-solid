import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yv3jn7vjn.css';
import '../../css/u/ui7vyv9lr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yv3jn7vjn"/><path class="ui7vyv9lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:check-double"} {...others} />);
}

export default Component;
