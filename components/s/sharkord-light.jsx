import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwfs0wj7w.css';
import '../../css/k/kqtmmib8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwfs0wj7w"/><path class="kqtmmib8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord-light"} {...others} />);
}

export default Component;
