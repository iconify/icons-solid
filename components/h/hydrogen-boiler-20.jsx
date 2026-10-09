import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkestgbmb.css';
import '../../css/k/kc-33db0z.css';
import '../../css/w/wdh6v20fa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nkestgbmb"/><path class="kc-33db0z"/><path class="wdh6v20fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-boiler-20"} {...others} />);
}

export default Component;
