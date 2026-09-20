import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnacsvbpp.css';
import '../../css/t/t-rbbb6gw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnacsvbpp"/><path clip-rule="evenodd" class="t-rbbb6gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-chat-fill"} {...others} />);
}

export default Component;
