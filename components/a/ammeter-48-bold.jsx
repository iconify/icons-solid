import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtgmy3b7z.css';
import '../../css/u/uskkbacik.css';
import '../../css/n/nfmjk5b5j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qtgmy3b7z"/><path class="uskkbacik"/><path class="nfmjk5b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammeter-48-bold"} {...others} />);
}

export default Component;
