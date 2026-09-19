import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3l_0fbmg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t3l_0fbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:filetype-doc"} {...others} />);
}

export default Component;
