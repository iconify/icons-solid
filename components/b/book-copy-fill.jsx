import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywqz_0b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywqz_0b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:book-copy-fill"} {...others} />);
}

export default Component;
