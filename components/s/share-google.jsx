import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp5sfuo3e.css';
import '../../css/q/qcv-ztbrv.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="jp5sfuo3e"/><path class="qcv-ztbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:share-google"} {...others} />);
}

export default Component;
