import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo8sfe2_t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qo8sfe2_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:star-half-left-o"} {...others} />);
}

export default Component;
