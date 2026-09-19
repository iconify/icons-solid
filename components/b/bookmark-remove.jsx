import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjvd_wblo.css';
import '../../css/c/cibdfcbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjvd_wblo"/><path class="cibdfcbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:bookmark-remove"} {...others} />);
}

export default Component;
