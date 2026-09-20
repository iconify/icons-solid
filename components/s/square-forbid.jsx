import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0uq9y3ak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0uq9y3ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-forbid"} {...others} />);
}

export default Component;
