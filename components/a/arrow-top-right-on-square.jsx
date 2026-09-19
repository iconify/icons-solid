import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn1pczm7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn1pczm7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-top-right-on-square"} {...others} />);
}

export default Component;
