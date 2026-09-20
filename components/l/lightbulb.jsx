import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxqmg7esw.css';
import '../../css/s/s7gdozb6t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kxqmg7esw"/><path class="s7gdozb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:lightbulb"} {...others} />);
}

export default Component;
