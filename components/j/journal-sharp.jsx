import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_my_xc0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a_my_xc0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:journal-sharp"} {...others} />);
}

export default Component;
