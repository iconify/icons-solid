import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiv92mbuz.css';
import '../../css/u/ufl34_bei.css';
import '../../css/l/lcu33ccze.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tiv92mbuz"/><path class="ufl34_bei"/><path class="lcu33ccze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:settings-view"} {...others} />);
}

export default Component;
