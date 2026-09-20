import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayrxfubgw.css';
import '../../css/b/b8neo7vhj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ayrxfubgw"/><path class="b8neo7vhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:credit-card"} {...others} />);
}

export default Component;
