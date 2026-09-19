import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t691w9ufv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t691w9ufv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chrome-cast"} {...others} />);
}

export default Component;
