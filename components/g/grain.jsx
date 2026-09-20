import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt6bjmk9e.css';
import '../../css/e/e77jw6bhj.css';
import '../../css/m/m-0u4sbzm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tt6bjmk9e"/><path class="e77jw6bhj"/><path class="m-0u4sbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:grain"} {...others} />);
}

export default Component;
