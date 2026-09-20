import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxhx1cm-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxhx1cm-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:horizontal-down-right-main"} {...others} />);
}

export default Component;
