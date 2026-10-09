import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9fdhsw1j.css';
import '../../css/q/qjpjf_bfl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m9fdhsw1j"/><path class="qjpjf_bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monopile-20"} {...others} />);
}

export default Component;
