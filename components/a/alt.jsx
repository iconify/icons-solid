import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6wlm125p.css';
import '../../css/m/m2_snib1d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o6wlm125p"/><path class="m2_snib1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:alt"} {...others} />);
}

export default Component;
