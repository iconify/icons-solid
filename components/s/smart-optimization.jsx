import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpt0rl_0q.css';
import '../../css/r/rq9ws1zkw.css';
import '../../css/w/w568sxg-m.css';
import '../../css/t/ty03fguwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="rq9ws1zkw"/><path class="w568sxg-m"/><path class="ty03fguwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:smart-optimization"} {...others} />);
}

export default Component;
