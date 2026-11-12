import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0xlexmxx.css';
import '../../css/u/u3k9wcbgt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u0xlexmxx"/><path class="u3k9wcbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:toodoom-dark"} {...others} />);
}

export default Component;
