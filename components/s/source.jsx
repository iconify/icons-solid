import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj9cr_9-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj9cr_9-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:source"} {...others} />);
}

export default Component;
