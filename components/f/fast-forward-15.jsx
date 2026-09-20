import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e56sd1j3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e56sd1j3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fast-forward-15"} {...others} />);
}

export default Component;
