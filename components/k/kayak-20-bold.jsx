import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj9306bap.css';
import '../../css/j/jh0o79cyk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nj9306bap"/><path class="jh0o79cyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kayak-20-bold"} {...others} />);
}

export default Component;
