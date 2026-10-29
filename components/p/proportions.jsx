import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2xw-0bez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2xw-0bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:proportions"} {...others} />);
}

export default Component;
