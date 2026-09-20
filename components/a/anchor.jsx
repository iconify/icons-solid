import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr81gjbdd.css';
import '../../css/h/h4_frbcfb.css';
import '../../css/q/qmhuddb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dr81gjbdd"/><circle class="h4_frbcfb"/><path class="qmhuddb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:anchor"} {...others} />);
}

export default Component;
