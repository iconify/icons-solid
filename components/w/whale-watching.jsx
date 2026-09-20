import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5pk8r8ai.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="x5pk8r8ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:whale-watching"} {...others} />);
}

export default Component;
