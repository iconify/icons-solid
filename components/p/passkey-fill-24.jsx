import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-xmtub-r.css';
import '../../css/g/g364_8bya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-xmtub-r"/><path class="g364_8bya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:passkey-fill-24"} {...others} />);
}

export default Component;
