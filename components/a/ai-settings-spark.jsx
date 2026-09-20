import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq9k7qcyb.css';
import '../../css/z/zkmn-3hyk.css';
import '../../css/n/nn8lriy3j.css';
import '../../css/a/a5deuq01m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rq9k7qcyb"/><path class="zkmn-3hyk"/><path class="nn8lriy3j"/><path class="a5deuq01m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-settings-spark"} {...others} />);
}

export default Component;
