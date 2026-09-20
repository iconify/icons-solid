import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avxsmbc0e.css';
import '../../css/t/tyy5pn3_l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="avxsmbc0e"/><path class="tyy5pn3_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:viewport"} {...others} />);
}

export default Component;
