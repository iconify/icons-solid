import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmzvefsak.css';
import '../../css/v/v68l-3b8f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="zmzvefsak"/><path class="v68l-3b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:male-female-outline"} {...others} />);
}

export default Component;
