import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k55cu9bsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k55cu9bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:loop-24"} {...others} />);
}

export default Component;
