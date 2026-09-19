import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_wi8bcoy.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="u_wi8bcoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alignleft"} {...others} />);
}

export default Component;
