import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecm4zwbye.css';
import '../../css/i/i23hwnb1g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ecm4zwbye"/><path class="i23hwnb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tablet-48-bold"} {...others} />);
}

export default Component;
