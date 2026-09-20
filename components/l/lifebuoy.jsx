import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz9iuq2bb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hz9iuq2bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:lifebuoy"} {...others} />);
}

export default Component;
