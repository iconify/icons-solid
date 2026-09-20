import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfoah-o_i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xfoah-o_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:magnifier-add"} {...others} />);
}

export default Component;
