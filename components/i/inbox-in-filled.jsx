import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg8uuk-ht.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yg8uuk-ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:inbox-in-filled"} {...others} />);
}

export default Component;
