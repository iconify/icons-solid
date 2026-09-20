import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqn_rxbsq.css';
import '../../css/m/mq1ufp71u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jqn_rxbsq"/><path class="mq1ufp71u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:controller"} {...others} />);
}

export default Component;
