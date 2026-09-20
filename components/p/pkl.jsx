import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwjj5yv8t.css';
import '../../css/a/aj-0tlawi.css';
import '../../css/g/guah0xbpd.css';
import '../../css/g/gln5lwbrw.css';
import '../../css/i/it4ayvb3w.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mwjj5yv8t"/><circle class="aj-0tlawi"/><g class="guah0xbpd"><path class="gln5lwbrw"/><path class="it4ayvb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pkl"} {...others} />);
}

export default Component;
