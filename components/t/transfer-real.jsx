import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp90ugwwx.css';
import '../../css/x/xli4t7b_v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pp90ugwwx"/><path class="xli4t7b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:transfer-real"} {...others} />);
}

export default Component;
