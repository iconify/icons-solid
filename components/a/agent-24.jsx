import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv0mdubqx.css';
import '../../css/q/qgpj5zbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv0mdubqx"/><path class="qgpj5zbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:agent-24"} {...others} />);
}

export default Component;
