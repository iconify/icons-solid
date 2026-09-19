import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wummjl_3r.css';
import '../../css/q/qpjvcje9z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wummjl_3r"/><path class="qpjvcje9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:package-text-analysis"} {...others} />);
}

export default Component;
