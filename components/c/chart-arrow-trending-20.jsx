import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar6ppzbnf.css';
import '../../css/a/av9ufk_wk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ar6ppzbnf"/><path class="av9ufk_wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chart-arrow-trending-20"} {...others} />);
}

export default Component;
