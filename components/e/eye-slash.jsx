import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8bqi5ahx.css';
import '../../css/c/cq-wbst_a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j8bqi5ahx"/><path class="cq-wbst_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:eye-slash"} {...others} />);
}

export default Component;
