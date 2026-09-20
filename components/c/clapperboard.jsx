import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqkrn3bpg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rqkrn3bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:clapperboard"} {...others} />);
}

export default Component;
