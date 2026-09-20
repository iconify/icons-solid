import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an4eqo_8f.css';
import '../../css/l/lr_186u5e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="an4eqo_8f"/><path clip-rule="evenodd" class="lr_186u5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:investment-selection-solid"} {...others} />);
}

export default Component;
