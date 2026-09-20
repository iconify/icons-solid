import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmnrj9_6h.css';
import '../../css/l/lrkaywonk.css';
import '../../css/a/auxtjjb7k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kmnrj9_6h"/><path class="lrkaywonk"/><path class="auxtjjb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-webpack-open"} {...others} />);
}

export default Component;
