import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh2nc6bnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh2nc6bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:stats"} {...others} />);
}

export default Component;
