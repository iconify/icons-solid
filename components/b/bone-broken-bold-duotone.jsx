import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itet59rhp.css';
import '../../css/k/kdn9gsbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itet59rhp"/><path class="kdn9gsbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-broken-bold-duotone"} {...others} />);
}

export default Component;
