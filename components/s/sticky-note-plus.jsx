import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb7-g2b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb7-g2b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:sticky-note-plus"} {...others} />);
}

export default Component;
