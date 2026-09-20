import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lszm1acwc.css';
import '../../css/a/aqnwi5bud.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lszm1acwc"/><path class="aqnwi5bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-aws"} {...others} />);
}

export default Component;
