import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyibnkb0g.css';
import '../../css/y/y177ocpml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hyibnkb0g"/><path class="y177ocpml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:recycle"} {...others} />);
}

export default Component;
