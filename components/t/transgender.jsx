import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmrndwx7j.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-1.5};
const content = `<path class="kmrndwx7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:transgender"} {...others} />);
}

export default Component;
