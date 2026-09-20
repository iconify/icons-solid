import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w38fo_d8q.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};
const content = `<path class="w38fo_d8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:scissors"} {...others} />);
}

export default Component;
