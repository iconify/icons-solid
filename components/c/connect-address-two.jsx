import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mjj-qhb8l.css';
import '../../css/t/t5o_7guan.css';
import '../../css/c/cnaahqbqf.css';
import '../../css/z/z7jmntbqi.css';
import '../../css/d/d_5cz8bal.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mjj-qhb8l"/><path class="t5o_7guan"/><path class="cnaahqbqf"/><path class="z7jmntbqi"/><circle class="d_5cz8bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connect-address-two"} {...others} />);
}

export default Component;
