import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvqgryrqk.css';
import '../../css/t/taxqw2bmt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kvqgryrqk"/><path class="taxqw2bmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:watch-15"} {...others} />);
}

export default Component;
