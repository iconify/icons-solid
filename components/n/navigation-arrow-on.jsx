import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjx_55mtv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zjx_55mtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:navigation-arrow-on"} {...others} />);
}

export default Component;
