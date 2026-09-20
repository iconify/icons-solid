import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo35-tb6o.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fo35-tb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:downmost"} {...others} />);
}

export default Component;
