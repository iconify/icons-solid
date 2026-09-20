import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kl12fbs6f.css';
import '../../css/q/qehczibes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kl12fbs6f"/><path class="qehczibes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:download-square"} {...others} />);
}

export default Component;
