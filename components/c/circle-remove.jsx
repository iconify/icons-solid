import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rot8tbcdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rot8tbcdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:circle-remove"} {...others} />);
}

export default Component;
