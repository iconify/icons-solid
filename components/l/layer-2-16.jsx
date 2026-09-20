import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di3yhtbnj.css';
import '../../css/a/a2jx_gbww.css';
import '../../css/g/gq843hbzn.css';
import '../../css/x/x7okf09_u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="di3yhtbnj"><path clip-rule="evenodd" class="a2jx_gbww"/><path class="gq843hbzn"/></g><path clip-rule="evenodd" class="x7okf09_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layer-2-16"} {...others} />);
}

export default Component;
