import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti1p9jbdh.css';
import '../../css/p/p3yrybykg.css';
import '../../css/c/c8vyrqbad.css';
import '../../css/r/r-l4vxabu.css';
import '../../css/y/ye31__byc.css';
import '../../css/w/wsj8aubbi.css';
import '../../css/r/rytpg5s0w.css';
import '../../css/w/wo_-pcbhr.css';
import '../../css/c/coo-60n9a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ti1p9jbdh"/><path class="p3yrybykg"/><path class="c8vyrqbad"/><circle class="r-l4vxabu"/><path class="ye31__byc"/><circle class="wsj8aubbi"/><path class="rytpg5s0w"/><path class="wo_-pcbhr"/><path class="coo-60n9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ventilator"} {...others} />);
}

export default Component;
