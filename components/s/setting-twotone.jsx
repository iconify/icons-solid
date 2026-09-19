import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5xotxb0o.css';
import '../../css/u/uhqrniblc.css';
import '../../css/v/vj5bxhb8m.css';
import '../../css/p/pte72cc4w.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x5xotxb0o"/><path class="uhqrniblc"/><path class="vj5bxhb8m"/><path class="pte72cc4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:setting-twotone"} {...others} />);
}

export default Component;
