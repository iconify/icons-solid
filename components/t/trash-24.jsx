import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu-junbcx.css';
import '../../css/j/jicrk8bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu-junbcx"/><path clip-rule="evenodd" class="jicrk8bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:trash-24"} {...others} />);
}

export default Component;
