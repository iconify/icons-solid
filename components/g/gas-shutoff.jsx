import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzk7_ll8g.css';
import '../../css/e/ejog3cncc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dzk7_ll8g"/><path class="ejog3cncc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:gas-shutoff"} {...others} />);
}

export default Component;
