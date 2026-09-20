import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7odhzqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7odhzqfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:skip-fill-24"} {...others} />);
}

export default Component;
