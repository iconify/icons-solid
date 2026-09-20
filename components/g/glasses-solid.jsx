import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zid9c5b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zid9c5b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:glasses-solid"} {...others} />);
}

export default Component;
