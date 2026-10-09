import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1dnnyevj.css';
import '../../css/v/v1iup-t3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v1dnnyevj"/><path class="v1iup-t3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mug-48-bold"} {...others} />);
}

export default Component;
