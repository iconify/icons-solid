import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsu_n2y9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsu_n2y9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:bar-chart"} {...others} />);
}

export default Component;
