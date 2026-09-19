import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyi3rac9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lyi3rac9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:filter-off-outline"} {...others} />);
}

export default Component;
