import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqt06ac5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cqt06ac5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:microscope-observation-sciene-solid"} {...others} />);
}

export default Component;
