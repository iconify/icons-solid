import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amlfk0b-w.css';
import '../../css/m/myx56ib_g.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="amlfk0b-w"/><path class="myx56ib_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:stopwatch"} {...others} />);
}

export default Component;
