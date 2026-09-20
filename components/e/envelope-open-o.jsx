import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzzp38b1b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fzzp38b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:envelope-open-o"} {...others} />);
}

export default Component;
