import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qn7kib-8y.css';
import '../../css/u/ui3uycp9j.css';
import '../../css/t/tc8jmyben.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qn7kib-8y"/><path class="ui3uycp9j"/><path class="tc8jmyben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:turn-around"} {...others} />);
}

export default Component;
