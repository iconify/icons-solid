import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw_fdvb2n.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kw_fdvb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:treasure-chest"} {...others} />);
}

export default Component;
