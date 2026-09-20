import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or_6jdb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or_6jdb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:more-menu-line"} {...others} />);
}

export default Component;
