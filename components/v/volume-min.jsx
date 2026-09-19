import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmyxs9_0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nmyxs9_0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:volume-min"} {...others} />);
}

export default Component;
