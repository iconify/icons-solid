import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp5o2yxoy.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="gp5o2yxoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:sun-min-fill"} {...others} />);
}

export default Component;
