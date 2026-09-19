import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7fm3yptg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c7fm3yptg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:markdown-fill"} {...others} />);
}

export default Component;
