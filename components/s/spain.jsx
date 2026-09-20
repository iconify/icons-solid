import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omtdxibhu.css';
import '../../css/g/gg6ecz8fg.css';
import '../../css/g/g_hughbse.css';
import '../../css/f/fyzs8qv0t.css';
import '../../css/m/m2-c6nb4f.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="omtdxibhu"/><path class="gg6ecz8fg"/><path class="g_hughbse"/><path class="fyzs8qv0t"/><path class="m2-c6nb4f"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:spain"} {...others} />);
}

export default Component;
