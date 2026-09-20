import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk1zpm-hn.css';
import '../../css/q/qb8fo0s2t.css';
import '../../css/h/h1zfeob5s.css';
import '../../css/f/fxr25cbfp.css';
import '../../css/a/a7dqsdb8d.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="dk1zpm-hn"><path class="qb8fo0s2t"/><path class="h1zfeob5s"/><path class="fxr25cbfp"/><path class="a7dqsdb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:control-duo"} {...others} />);
}

export default Component;
