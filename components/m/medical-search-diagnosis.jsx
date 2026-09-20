import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x8sz7e6ca.css';
import '../../css/f/f6woq_8mf.css';
import '../../css/i/if1clzb1m.css';
import '../../css/u/u5uxzrbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x8sz7e6ca"/><path class="f6woq_8mf"/><path class="if1clzb1m"/><path class="u5uxzrbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:medical-search-diagnosis"} {...others} />);
}

export default Component;
