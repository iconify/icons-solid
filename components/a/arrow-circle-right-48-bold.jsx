import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/a/a600ktbsl.css';
import '../../css/l/l1xb2ibbw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="a600ktbsl"/><path class="l1xb2ibbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-right-48-bold"} {...others} />);
}

export default Component;
