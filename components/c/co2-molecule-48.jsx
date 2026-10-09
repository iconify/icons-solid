import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvx5cvkbp.css';
import '../../css/o/ozmfki5en.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fvx5cvkbp"/><path class="ozmfki5en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-molecule-48"} {...others} />);
}

export default Component;
