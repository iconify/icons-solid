import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lukals4wc.css';
import '../../css/u/u9zmojb0f.css';
import '../../css/k/kl2kn05lp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lukals4wc"/><path class="u9zmojb0f"/><path class="kl2kn05lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord"} {...others} />);
}

export default Component;
