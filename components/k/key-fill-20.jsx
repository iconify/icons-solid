import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_bk0ufiq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_bk0ufiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:key-fill-20"} {...others} />);
}

export default Component;
