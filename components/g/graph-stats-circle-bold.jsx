import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsrkrvcpu.css';
import '../../css/u/uv8ih1bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jsrkrvcpu"/><path class="uv8ih1bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:graph-stats-circle-bold"} {...others} />);
}

export default Component;
