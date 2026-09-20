import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufv-l2b0j.css';
import '../../css/j/jw9lez4uq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ufv-l2b0j"/><path class="jw9lez4uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cypress"} {...others} />);
}

export default Component;
