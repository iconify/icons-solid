import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzatnb48s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bzatnb48s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:wifi-2"} {...others} />);
}

export default Component;
