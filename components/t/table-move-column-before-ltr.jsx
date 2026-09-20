import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge46vpt7u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ge46vpt7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-move-column-before-ltr"} {...others} />);
}

export default Component;
