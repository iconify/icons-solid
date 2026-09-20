import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhbc-n8wr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dhbc-n8wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:scale"} {...others} />);
}

export default Component;
