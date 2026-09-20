import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4z4x4v0q.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="v4z4x4v0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:blank-calendar-remix"} {...others} />);
}

export default Component;
