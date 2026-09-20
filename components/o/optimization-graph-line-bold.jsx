import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk9vvbbsy.css';
import '../../css/l/l14akwbha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk9vvbbsy"/><path class="l14akwbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:optimization-graph-line-bold"} {...others} />);
}

export default Component;
