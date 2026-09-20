import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fchcg7aab.css';
import '../../css/b/bb6-6oplo.css';
import '../../css/a/af6c2lt3u.css';
import '../../css/q/qv1o886oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fchcg7aab"/><path class="bb6-6oplo"/><path class="af6c2lt3u"/><path class="qv1o886oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:album-duotone"} {...others} />);
}

export default Component;
