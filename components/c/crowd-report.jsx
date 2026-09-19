import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu_6g5b9q.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zu_6g5b9q"/><path class="nu2_-nbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:crowd-report"} {...others} />);
}

export default Component;
