import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvcu7mk6y.css';
import '../../css/z/zzqt9rbax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvcu7mk6y"/><path clip-rule="evenodd" class="zzqt9rbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:san"} {...others} />);
}

export default Component;
