import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6xc7b-8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p6xc7b-8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:phone-routing-filled"} {...others} />);
}

export default Component;
