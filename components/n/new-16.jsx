import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kic12wbzz.css';
import '../../css/h/hm17yp49j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kic12wbzz"/><path clip-rule="evenodd" class="hm17yp49j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:new-16"} {...others} />);
}

export default Component;
