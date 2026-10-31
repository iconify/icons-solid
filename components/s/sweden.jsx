import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3nrppbry.css';
import '../../css/q/q7w59bb3x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="x3nrppbry"/><path class="q7w59bb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sweden"} {...others} />);
}

export default Component;
