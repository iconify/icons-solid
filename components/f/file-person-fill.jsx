import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbmn4jfpr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kbmn4jfpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-person-fill"} {...others} />);
}

export default Component;
