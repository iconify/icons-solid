import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coc607b1m.css';
import '../../css/d/d0kk4rblb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="coc607b1m"/><path clip-rule="evenodd" class="d0kk4rblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:crosshair-16"} {...others} />);
}

export default Component;
