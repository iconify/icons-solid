import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lszm1acwc.css';
import '../../css/u/u4bkq5bdg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lszm1acwc"/><path class="u4bkq5bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-svg"} {...others} />);
}

export default Component;
