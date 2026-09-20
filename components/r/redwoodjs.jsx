import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjmdefyhd.css';
import '../../css/k/k4tc3yb1h.css';

const viewBox = {"width":256,"height":277};
const content = `<path class="xjmdefyhd"/><path class="k4tc3yb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:redwoodjs"} {...others} />);
}

export default Component;
