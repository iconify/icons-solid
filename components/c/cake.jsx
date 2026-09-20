import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/e/e9-zai.css';
import '../../css/d/dm-51m.css';
import '../../css/c/c-b7rz.css';
import '../../css/n/ndxadb.css';
import '../../css/s/so-from-30.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ll345f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c e9-zai"/><path class="a0m25c dm-51m"/><path class="a0m25c c-b7rz"/><path class="ndxadb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cake"} {...others} />);
}

export default Component;
