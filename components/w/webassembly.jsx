import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eru_cbbks.css';
import '../../css/g/gnuh1n3mu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eru_cbbks"/><path class="gnuh1n3mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:webassembly"} {...others} />);
}

export default Component;
