import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmov8hb-b.css';
import '../../css/m/mn4wyfb1u.css';
import '../../css/a/anwbogkuk.css';
import '../../css/x/xog6z1bwh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pmov8hb-b"/><path class="mn4wyfb1u"/><path class="anwbogkuk"/><path class="xog6z1bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:store-48-bold"} {...others} />);
}

export default Component;
