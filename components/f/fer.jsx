import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvj5dzbtl.css';
import '../../css/i/inpc4rroq.css';
import '../../css/q/qapg4nbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvj5dzbtl"/><path class="inpc4rroq"/><path clip-rule="evenodd" class="qapg4nbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fer"} {...others} />);
}

export default Component;
