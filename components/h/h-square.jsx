import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzzkz4bes.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="bzzkz4bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:h-square"} {...others} />);
}

export default Component;
