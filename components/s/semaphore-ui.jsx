import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r057-4e-t.css';
import '../../css/w/we37umbxg.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="r057-4e-t"/><path class="we37umbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:semaphore-ui"} {...others} />);
}

export default Component;
