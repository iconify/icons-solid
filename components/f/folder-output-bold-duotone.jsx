import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq2hqvwyz.css';
import '../../css/b/b9htj9b6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xq2hqvwyz"/><path class="b9htj9b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-output-bold-duotone"} {...others} />);
}

export default Component;
