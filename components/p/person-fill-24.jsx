import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isufo5b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isufo5b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:person-fill-24"} {...others} />);
}

export default Component;
