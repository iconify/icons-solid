import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccwuv1wgp.css';
import '../../css/a/anaf4rr2n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ccwuv1wgp"/><path class="anaf4rr2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chart-timeline"} {...others} />);
}

export default Component;
