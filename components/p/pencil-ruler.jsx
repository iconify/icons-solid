import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b84sy2bnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b84sy2bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:pencil-ruler"} {...others} />);
}

export default Component;
