import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c75g7nqit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c75g7nqit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:filter-alt-circle-solid"} {...others} />);
}

export default Component;
