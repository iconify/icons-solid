import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shw5dwbgv.css';
import '../../css/u/u9zmojb0f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shw5dwbgv"/><path class="u9zmojb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord-dark"} {...others} />);
}

export default Component;
