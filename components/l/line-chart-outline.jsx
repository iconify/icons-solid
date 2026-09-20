import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si-hzbsqw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="si-hzbsqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:line-chart-outline"} {...others} />);
}

export default Component;
