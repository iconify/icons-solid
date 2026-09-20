import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/til6eg8hp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="til6eg8hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-clipboard"} {...others} />);
}

export default Component;
