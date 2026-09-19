import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brxv_3lse.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="brxv_3lse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:eye-with-line"} {...others} />);
}

export default Component;
