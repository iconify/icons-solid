import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz6mnac-c.css';
import '../../css/k/k-gdp-2hr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dz6mnac-c"/><path class="k-gdp-2hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pnpm-light"} {...others} />);
}

export default Component;
