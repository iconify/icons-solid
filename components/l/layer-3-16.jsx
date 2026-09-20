import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di3yhtbnj.css';
import '../../css/a/a2jx_gbww.css';
import '../../css/j/jcrs4fjps.css';
import '../../css/c/c0e6x-19t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="di3yhtbnj"><path clip-rule="evenodd" class="a2jx_gbww"/><path class="jcrs4fjps"/></g><path clip-rule="evenodd" class="c0e6x-19t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layer-3-16"} {...others} />);
}

export default Component;
