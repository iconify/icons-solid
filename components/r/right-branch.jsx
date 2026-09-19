import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zej6rrbqn.css';
import '../../css/r/r0kuxvpah.css';
import '../../css/y/ycub9mb6c.css';
import '../../css/u/ut3ekqbng.css';
import '../../css/a/af3tajb3w.css';
import '../../css/t/tzhpqccsp.css';
import '../../css/c/c47q-xdap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zej6rrbqn"/><path class="r0kuxvpah"/><circle class="ycub9mb6c"/><path class="ut3ekqbng"/><path class="af3tajb3w"/><path class="tzhpqccsp"/><path class="c47q-xdap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:right-branch"} {...others} />);
}

export default Component;
