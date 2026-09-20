import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoqfu3b7n.css';
import '../../css/z/zpm4lyb8b.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoqfu3b7n"/><path class="zpm4lyb8b"/><path class="ooafjrbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:disc"} {...others} />);
}

export default Component;
