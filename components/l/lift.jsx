import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u3wqukbdf.css';
import '../../css/v/vilztpoex.css';
import '../../css/f/fu89v9oxg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u3wqukbdf"/><path class="vilztpoex"/><path class="fu89v9oxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lift"} {...others} />);
}

export default Component;
