import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukvws-bxw.css';
import '../../css/t/tv26_bcqf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ukvws-bxw"/><path class="tv26_bcqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-seeders"} {...others} />);
}

export default Component;
