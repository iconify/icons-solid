import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvq5-lbye.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uvq5-lbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:arrow-circle-up"} {...others} />);
}

export default Component;
