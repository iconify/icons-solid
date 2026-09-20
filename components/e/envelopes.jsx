import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to33eh6vt.css';
import '../../css/t/t6ndzsb3y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="to33eh6vt"/><path class="t6ndzsb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:envelopes"} {...others} />);
}

export default Component;
