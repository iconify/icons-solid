import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/z802m9bnz.css';
import '../../css/r/r31xd1s8a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path clip-rule="evenodd" class="z802m9bnz"/><path class="r31xd1s8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:water-rate-two"} {...others} />);
}

export default Component;
