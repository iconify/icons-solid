import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1tw9_spv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k1tw9_spv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlesix"} {...others} />);
}

export default Component;
