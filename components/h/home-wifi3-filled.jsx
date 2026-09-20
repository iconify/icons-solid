import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypalqe4ks.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ypalqe4ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-wifi3-filled"} {...others} />);
}

export default Component;
