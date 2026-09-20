import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voelf1xfy.css';
import '../../css/p/p7ctu3bns.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="voelf1xfy"/><path class="p7ctu3bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:power-off"} {...others} />);
}

export default Component;
