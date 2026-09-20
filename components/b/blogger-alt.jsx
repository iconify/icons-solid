import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_uuu056f.css';
import '../../css/q/qdis4za-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_uuu056f"/><path class="qdis4za-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:blogger-alt"} {...others} />);
}

export default Component;
