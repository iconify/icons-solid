import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9eql_-9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9eql_-9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-skip-next-circle"} {...others} />);
}

export default Component;
