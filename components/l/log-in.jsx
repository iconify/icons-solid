import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-uzbcchb.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-3};
const content = `<path class="a-uzbcchb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:log-in"} {...others} />);
}

export default Component;
