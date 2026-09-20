import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t5wd5f95q.css';
import '../../css/a/ag3zrhbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t5wd5f95q"/><path class="ag3zrhbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-pearl"} {...others} />);
}

export default Component;
