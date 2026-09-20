import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9k9a11_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9k9a11_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:dashboard-vert-line"} {...others} />);
}

export default Component;
