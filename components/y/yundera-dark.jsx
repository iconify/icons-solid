import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt9x_hbmy.css';
import '../../css/s/s1wngpzxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xt9x_hbmy"/><path class="s1wngpzxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yundera-dark"} {...others} />);
}

export default Component;
