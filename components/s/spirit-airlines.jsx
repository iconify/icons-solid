import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trl7bqbmp.css';
import '../../css/d/d9m02bchl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="trl7bqbmp"/><path class="d9m02bchl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spirit-airlines"} {...others} />);
}

export default Component;
