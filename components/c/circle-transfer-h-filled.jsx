import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb135jbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zb135jbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-transfer-h-filled"} {...others} />);
}

export default Component;
