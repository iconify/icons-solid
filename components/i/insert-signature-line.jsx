import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ky_ifzk.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="v6ky_ifzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:insert-signature-line"} {...others} />);
}

export default Component;
