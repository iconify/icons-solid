import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/audx4-b0p.css';
import '../../css/p/pwd6rdbok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="audx4-b0p"/><path class="pwd6rdbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:amazon"} {...others} />);
}

export default Component;
