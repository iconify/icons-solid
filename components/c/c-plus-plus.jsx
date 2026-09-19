import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as0qs_ufy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="as0qs_ufy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:c-plus-plus"} {...others} />);
}

export default Component;
