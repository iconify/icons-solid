import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj-1rb3_g.css';
import '../../css/m/mkx0ve-2x.css';
import '../../css/a/ak63wskol.css';
import '../../css/q/q9i7kob_f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wj-1rb3_g"/><path class="mkx0ve-2x"/><path class="ak63wskol"/><path class="q9i7kob_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:google"} {...others} />);
}

export default Component;
