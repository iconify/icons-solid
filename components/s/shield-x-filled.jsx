import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz6c57d1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xz6c57d1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shield-x-filled"} {...others} />);
}

export default Component;
