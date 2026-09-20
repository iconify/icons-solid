import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svnli_bhv.css';
import '../../css/y/y9urdac4t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="svnli_bhv"/><path class="y9urdac4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:agent-16"} {...others} />);
}

export default Component;
