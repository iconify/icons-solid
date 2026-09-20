import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd4w9bbse.css';
import '../../css/k/k-gdp-2hr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vd4w9bbse"/><path class="k-gdp-2hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pnpm"} {...others} />);
}

export default Component;
