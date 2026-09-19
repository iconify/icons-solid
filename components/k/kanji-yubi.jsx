import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2mpnnbue.css';

const viewBox = {"width":1824,"height":1824};
const content = `<path class="v2mpnnbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:kanji-yubi"} {...others} />);
}

export default Component;
