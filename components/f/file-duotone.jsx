import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw2v_fbbh.css';
import '../../css/g/gu10zdn1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kw2v_fbbh"/><path class="gu10zdn1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-duotone"} {...others} />);
}

export default Component;
