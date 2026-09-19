import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw5ds4b9n.css';
import '../../css/r/r6--z6kjy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="lw5ds4b9n"/><path class="r6--z6kjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:male-outline"} {...others} />);
}

export default Component;
