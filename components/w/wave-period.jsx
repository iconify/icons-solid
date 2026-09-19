import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-ixdzbom.css';
import '../../css/f/ffofn9bxp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c-ixdzbom"/><path class="ffofn9bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wave-period"} {...others} />);
}

export default Component;
