import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta4ildugp.css';
import '../../css/g/gda8q7btv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ta4ildugp"/><path class="gda8q7btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-48-bold"} {...others} />);
}

export default Component;
