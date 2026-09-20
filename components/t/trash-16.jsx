import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le5en1tee.css';
import '../../css/e/el2152b6s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="le5en1tee"/><path clip-rule="evenodd" class="el2152b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:trash-16"} {...others} />);
}

export default Component;
