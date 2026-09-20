import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9ywkvrys.css';
import '../../css/y/ybd0ybb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9ywkvrys"/><path class="ybd0ybb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gathio-light"} {...others} />);
}

export default Component;
