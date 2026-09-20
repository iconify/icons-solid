import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u97ccj73n.css';
import '../../css/h/h4zd8yfzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u97ccj73n"/><path class="h4zd8yfzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:save-floppy"} {...others} />);
}

export default Component;
