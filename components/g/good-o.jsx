import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zueiq1v0a.css';
import '../../css/a/aims5q5fz.css';
import '../../css/f/fm3-47bra.css';
import '../../css/g/ggw1rhbfc.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="zueiq1v0a"/><path class="aims5q5fz"/><circle class="fm3-47bra"/><circle class="ggw1rhbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:good-o"} {...others} />);
}

export default Component;
