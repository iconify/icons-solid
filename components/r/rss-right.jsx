import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sacl49i0j.css';
import '../../css/f/fv1pvlf1q.css';
import '../../css/q/qi3bd4p2i.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="sacl49i0j"/><path class="fv1pvlf1q"/><path class="qi3bd4p2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rss-right"} {...others} />);
}

export default Component;
