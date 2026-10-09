import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imkb0jb8u.css';
import '../../css/a/ae5xgbc4y.css';
import '../../css/r/rko5qsb4b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="imkb0jb8u"/><path class="ae5xgbc4y"/><path class="rko5qsb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:second-life-battery-48"} {...others} />);
}

export default Component;
