import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5u-odb8r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n5u-odb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-text-fill"} {...others} />);
}

export default Component;
