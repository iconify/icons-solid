import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrv-d9f8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xrv-d9f8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:jpg-file"} {...others} />);
}

export default Component;
