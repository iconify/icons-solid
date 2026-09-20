import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av-303pwd.css';
import '../../css/g/giz0u4e7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av-303pwd"/><path class="giz0u4e7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-search-bold"} {...others} />);
}

export default Component;
