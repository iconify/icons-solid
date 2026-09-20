import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq5r37b4p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rq5r37b4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:clipboard-no-access-outline"} {...others} />);
}

export default Component;
