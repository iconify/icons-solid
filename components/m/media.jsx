import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab3zrzlrq.css';
import '../../css/b/bldxs_3nx.css';
import '../../css/k/k5dgsrbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab3zrzlrq"/><path class="bldxs_3nx"/><path class="k5dgsrbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:media"} {...others} />);
}

export default Component;
