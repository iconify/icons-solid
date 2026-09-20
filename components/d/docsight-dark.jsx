import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvjyobsxa.css';
import '../../css/m/mdf334osa.css';
import '../../css/n/ng8zrebtc.css';
import '../../css/k/k565abc4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xvjyobsxa"/><path class="mdf334osa"/><path class="ng8zrebtc"/><circle class="k565abc4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docsight-dark"} {...others} />);
}

export default Component;
