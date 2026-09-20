import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuqogfllb.css';
import '../../css/l/ld96apbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuqogfllb"/><path clip-rule="evenodd" class="ld96apbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:light-bulb-exclamation-light"} {...others} />);
}

export default Component;
