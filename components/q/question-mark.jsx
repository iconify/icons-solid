import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbkc6ef-d.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="dbkc6ef-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:question-mark"} {...others} />);
}

export default Component;
