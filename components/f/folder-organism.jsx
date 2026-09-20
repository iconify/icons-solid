import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufv-l2b0j.css';
import '../../css/k/knky5hmzz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ufv-l2b0j"/><path class="knky5hmzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-organism"} {...others} />);
}

export default Component;
