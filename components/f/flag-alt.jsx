import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciciw1u9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ciciw1u9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:flag-alt"} {...others} />);
}

export default Component;
