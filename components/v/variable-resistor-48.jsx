import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_ml6hb0a.css';
import '../../css/g/g66uptbvs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_ml6hb0a"/><path class="g66uptbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:variable-resistor-48"} {...others} />);
}

export default Component;
