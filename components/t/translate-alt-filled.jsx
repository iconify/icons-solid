import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1-e9ybfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x1-e9ybfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:translate-alt-filled"} {...others} />);
}

export default Component;
