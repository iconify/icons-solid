import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugiu9abnc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ugiu9abnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:arrow-down-right"} {...others} />);
}

export default Component;
