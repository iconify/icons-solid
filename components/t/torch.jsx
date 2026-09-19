import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mavdskbnx.css';
import '../../css/d/dke65eb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mavdskbnx"/><path class="dke65eb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:torch"} {...others} />);
}

export default Component;
