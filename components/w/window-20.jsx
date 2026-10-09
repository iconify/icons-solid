import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulnm6hboq.css';
import '../../css/z/zgnbte-qu.css';
import '../../css/r/rkqq5dzkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ulnm6hboq"/><path class="zgnbte-qu"/><path class="rkqq5dzkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:window-20"} {...others} />);
}

export default Component;
