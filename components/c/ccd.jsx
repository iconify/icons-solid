import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1fh3foma.css';
import '../../css/o/oj7hu3rce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1fh3foma"/><path class="oj7hu3rce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ccd"} {...others} />);
}

export default Component;
