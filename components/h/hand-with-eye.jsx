import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtx1i6bii.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qtx1i6bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hand-with-eye"} {...others} />);
}

export default Component;
