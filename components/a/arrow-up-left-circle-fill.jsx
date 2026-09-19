import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9c7y2l-r.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="j9c7y2l-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-up-left-circle-fill"} {...others} />);
}

export default Component;
