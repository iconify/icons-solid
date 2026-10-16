import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrkdbpk8l.css';
import '../../css/o/o63kjfrnf.css';
import '../../css/a/afjq858_y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lrkdbpk8l"/><path class="o63kjfrnf"/><path class="afjq858_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hinge-48"} {...others} />);
}

export default Component;
