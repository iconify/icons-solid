import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdirvfh-u.css';
import '../../css/r/r60z8bcvg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cdirvfh-u"/><path class="r60z8bcvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apartment-20"} {...others} />);
}

export default Component;
