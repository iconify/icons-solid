import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7cp-bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb7cp-bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:north-west-square-line"} {...others} />);
}

export default Component;
