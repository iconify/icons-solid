import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn6el7ban.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn6el7ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:synagogue"} {...others} />);
}

export default Component;
