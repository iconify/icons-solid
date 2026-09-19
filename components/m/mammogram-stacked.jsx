import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy_kkbbcz.css';
import '../../css/b/b2wwm0bgg.css';
import '../../css/w/wv3pq4uzf.css';
import '../../css/g/gl84sdyro.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qy_kkbbcz"/><path class="b2wwm0bgg"/><path class="wv3pq4uzf"/><path class="gl84sdyro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mammogram-stacked"} {...others} />);
}

export default Component;
