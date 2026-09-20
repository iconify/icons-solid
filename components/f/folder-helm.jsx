import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd1yx_bjk.css';
import '../../css/x/xstspbbit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kd1yx_bjk"/><path class="xstspbbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-helm"} {...others} />);
}

export default Component;
