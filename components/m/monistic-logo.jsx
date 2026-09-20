import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b52cj7bic.css';
import '../../css/d/de917sbiy.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="b52cj7bic"/><path class="de917sbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monistic-logo"} {...others} />);
}

export default Component;
