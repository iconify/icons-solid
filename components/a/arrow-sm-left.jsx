import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilwl7-91o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilwl7-91o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:arrow-sm-left"} {...others} />);
}

export default Component;
