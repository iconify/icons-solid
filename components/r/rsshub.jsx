import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjn-m4mbs.css';
import '../../css/y/yrit3k1ll.css';
import '../../css/j/jm-3xzqde.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bjn-m4mbs"/><path class="yrit3k1ll"/><circle class="jm-3xzqde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rsshub"} {...others} />);
}

export default Component;
