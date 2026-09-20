import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g04m7ebjr.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="g04m7ebjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:alien"} {...others} />);
}

export default Component;
