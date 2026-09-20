import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjjz5bk1x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="qjjz5bk1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-user-curriculum-remix"} {...others} />);
}

export default Component;
