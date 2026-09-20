import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjx1gv_9g.css';
import '../../css/a/aavawy-uf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kjx1gv_9g"/><path class="aavawy-uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:jar"} {...others} />);
}

export default Component;
