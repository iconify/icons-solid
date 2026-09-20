import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpd9z7b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zpd9z7b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:toilet-paper"} {...others} />);
}

export default Component;
