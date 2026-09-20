import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4d2-cb4w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v4d2-cb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:petrine-cross"} {...others} />);
}

export default Component;
