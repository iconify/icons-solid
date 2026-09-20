import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx0m9s7_b.css';
import '../../css/i/igandw20i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wx0m9s7_b"/><path clip-rule="evenodd" class="igandw20i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:discord-solid"} {...others} />);
}

export default Component;
