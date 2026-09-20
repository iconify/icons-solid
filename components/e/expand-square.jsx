import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbxme9fqn.css';
import '../../css/w/wi8y19aeg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qbxme9fqn"/><path class="wi8y19aeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:expand-square"} {...others} />);
}

export default Component;
