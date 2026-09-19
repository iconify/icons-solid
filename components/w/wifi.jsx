import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cya1rgi2m.css';
import '../../css/p/pzrl0qlzj.css';
import '../../css/m/mia-jjxeq.css';
import '../../css/f/fw7pardmj.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="cya1rgi2m"/><path class="pzrl0qlzj"/><path class="mia-jjxeq"/><path class="fw7pardmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi"} {...others} />);
}

export default Component;
