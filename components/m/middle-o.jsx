import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zueiq1v0a.css';
import '../../css/k/k1dg41fxr.css';
import '../../css/w/w19j9uu-g.css';
import '../../css/z/zc7akvbfn.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="zueiq1v0a"/><circle class="k1dg41fxr"/><circle class="w19j9uu-g"/><path class="zc7akvbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:middle-o"} {...others} />);
}

export default Component;
