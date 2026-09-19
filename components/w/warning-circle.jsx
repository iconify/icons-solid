import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_-3zpb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_-3zpb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:warning-circle"} {...others} />);
}

export default Component;
