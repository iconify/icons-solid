import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_34kqjcq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f_34kqjcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:address-book-outline"} {...others} />);
}

export default Component;
