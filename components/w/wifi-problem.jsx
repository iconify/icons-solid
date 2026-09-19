import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofj4p7beb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofj4p7beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:wifi-problem"} {...others} />);
}

export default Component;
