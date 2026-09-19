import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4ijmfbcv.css';
import '../../css/d/dj_p1sbgi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v4ijmfbcv"/><path class="dj_p1sbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:stumbleupon"} {...others} />);
}

export default Component;
