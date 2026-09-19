import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p86nkixdb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p86nkixdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:nextcloud"} {...others} />);
}

export default Component;
