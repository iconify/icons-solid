import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv6ayir8w.css';
import '../../css/y/yoxjsh9xh.css';
import '../../css/b/b2ay1hace.css';
import '../../css/k/k-fjt7b_g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yv6ayir8w"/><path class="yoxjsh9xh"/><path class="b2ay1hace"/><path class="k-fjt7b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharry-light"} {...others} />);
}

export default Component;
