import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp00o5b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp00o5b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:open-webui-alt"} {...others} />);
}

export default Component;
