import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdqelk83j.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fy8e6rbyj.css';
import '../../css/d/d10m3acgu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="cdqelk83j"/><g class="md286fbip"><path class="fy8e6rbyj"/><path class="d10m3acgu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:soc"} {...others} />);
}

export default Component;
