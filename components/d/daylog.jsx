import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udzhtcbgx.css';
import '../../css/b/bneojtbom.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="udzhtcbgx"/><path class="bneojtbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:daylog"} {...others} />);
}

export default Component;
