import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-_32d92c.css';
import '../../css/x/xmfhvr75a.css';
import '../../css/b/bnvu6ybwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-_32d92c"/><path class="xmfhvr75a"/><path class="bnvu6ybwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:key"} {...others} />);
}

export default Component;
