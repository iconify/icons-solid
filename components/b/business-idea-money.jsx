import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/c7_5kkaag.css';
import '../../css/w/wbjetmbvh.css';
import '../../css/v/va8mohqrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="c7_5kkaag"/><path class="wbjetmbvh"/><path class="va8mohqrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:business-idea-money"} {...others} />);
}

export default Component;
