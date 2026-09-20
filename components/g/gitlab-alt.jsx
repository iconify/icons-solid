import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py7rdhbaz.css';
import '../../css/w/wj977u-ag.css';
import '../../css/i/ieo-h5b2e.css';
import '../../css/j/jpqygqbtv.css';
import '../../css/t/tqch-griz.css';
import '../../css/c/cuj72kbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py7rdhbaz"/><path class="wj977u-ag"/><path class="ieo-h5b2e"/><path class="jpqygqbtv"/><path class="tqch-griz"/><path class="cuj72kbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:gitlab-alt"} {...others} />);
}

export default Component;
