import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc4ommb6u.css';
import '../../css/i/it-ce4kqj.css';
import '../../css/r/rawgbsbfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oc4ommb6u"/><path class="it-ce4kqj"/><path class="rawgbsbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-one-48-bold"} {...others} />);
}

export default Component;
