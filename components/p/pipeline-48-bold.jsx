import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9znocb5r.css';
import '../../css/s/stcfx4bpj.css';
import '../../css/f/f5atepbej.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q9znocb5r"/><path class="stcfx4bpj"/><path class="f5atepbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipeline-48-bold"} {...others} />);
}

export default Component;
