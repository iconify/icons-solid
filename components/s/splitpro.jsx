import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w03s3zj-z.css';
import '../../css/k/kc4mupbht.css';
import '../../css/h/hdwjuyb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w03s3zj-z"/><path class="kc4mupbht"/><path class="hdwjuyb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:splitpro"} {...others} />);
}

export default Component;
