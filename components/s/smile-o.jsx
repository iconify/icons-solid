import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttfpwn_ty.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ttfpwn_ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:smile-o"} {...others} />);
}

export default Component;
