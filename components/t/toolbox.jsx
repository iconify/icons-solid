import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh__tacrr.css';
import '../../css/q/qhgqg5brt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gh__tacrr"/><path class="qhgqg5brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:toolbox"} {...others} />);
}

export default Component;
