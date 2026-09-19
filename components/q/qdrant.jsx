import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6yxyvb3p.css';
import '../../css/l/l32vte6zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6yxyvb3p"/><path class="l32vte6zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:qdrant"} {...others} />);
}

export default Component;
