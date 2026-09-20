import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubgy9z47q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ubgy9z47q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:scooter-15"} {...others} />);
}

export default Component;
