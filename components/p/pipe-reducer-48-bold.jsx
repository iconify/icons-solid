import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvlu12bfl.css';
import '../../css/k/kqfh3ccjg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvlu12bfl"/><path class="kqfh3ccjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-reducer-48-bold"} {...others} />);
}

export default Component;
