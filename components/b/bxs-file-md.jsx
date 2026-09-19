import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4zbgebyk.css';
import '../../css/b/bb6-y3inu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4zbgebyk"/><path class="bb6-y3inu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-md"} {...others} />);
}

export default Component;
