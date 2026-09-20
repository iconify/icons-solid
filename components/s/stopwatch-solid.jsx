import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agydu2b-r.css';
import '../../css/w/w26aucbxb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="agydu2b-r"/><path clip-rule="evenodd" class="w26aucbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:stopwatch-solid"} {...others} />);
}

export default Component;
