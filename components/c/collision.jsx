import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-c1zgbnj.css';
import '../../css/a/amusoxbhb.css';
import '../../css/s/serii-led.css';
import '../../css/c/cuarf-7ca.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i-c1zgbnj"/><path class="amusoxbhb"/><path class="serii-led"/><path class="cuarf-7ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:collision"} {...others} />);
}

export default Component;
