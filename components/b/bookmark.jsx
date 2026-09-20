import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/intbrob7i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="intbrob7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bookmark"} {...others} />);
}

export default Component;
