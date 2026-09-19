import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5-1m4u-m.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="b5-1m4u-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:checkmark-alt-circle-fill"} {...others} />);
}

export default Component;
