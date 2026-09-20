import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyf10rbwx.css';

const viewBox = {"width":12,"height":16};
const content = `<path class="vyf10rbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:three-bars"} {...others} />);
}

export default Component;
