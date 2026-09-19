import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2aa4fbfg.css';
import '../../css/r/r-selsbww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v2aa4fbfg"/><path class="r-selsbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:archive"} {...others} />);
}

export default Component;
