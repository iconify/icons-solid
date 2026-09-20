import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abq_w4bbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="abq_w4bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:minus-circle-o"} {...others} />);
}

export default Component;
