import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/w/wi1u51b6i.css';
import '../../css/i/i4nouhexe.css';
import '../../css/q/qf7tbcbyb.css';
import '../../css/s/s4aesvbut.css';
import '../../css/o/ojmn89b2j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="wi1u51b6i"/><path class="i4nouhexe"/><path class="qf7tbcbyb"/><path class="s4aesvbut"/><path class="ojmn89b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bowl-one"} {...others} />);
}

export default Component;
