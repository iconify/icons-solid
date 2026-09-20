import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/c/crwepn.css';
import '../../css/c/cmp8kl.css';
import '../../css/a/ay17qu.css';
import '../../css/b/b6wo5p.css';
import '../../css/z/zpjhwe.css';
import '../../css/s/so-from-70.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c crwepn"/><path class="cmp8kl"/><path class="a0m25c ay17qu"/><path class="a0m25c b6wo5p"/><path class="a0m25c zpjhwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:monitor-arrow-up"} {...others} />);
}

export default Component;
