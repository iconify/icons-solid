import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2dqk2sur.css';
import '../../css/r/rb6k0dd7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2dqk2sur"/><path class="rb6k0dd7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster"} {...others} />);
}

export default Component;
