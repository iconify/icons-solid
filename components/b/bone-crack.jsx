import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqgu-6_kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wqgu-6_kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bone-crack"} {...others} />);
}

export default Component;
