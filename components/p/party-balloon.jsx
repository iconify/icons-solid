import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r28-5qbnn.css';
import '../../css/x/x7k9zt7ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r28-5qbnn"/><path class="x7k9zt7ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:party-balloon"} {...others} />);
}

export default Component;
