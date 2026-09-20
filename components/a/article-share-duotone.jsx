import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcr8hnbtp.css';
import '../../css/o/ohfs0hakv.css';
import '../../css/h/hwanmkeov.css';
import '../../css/g/gkefinb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcr8hnbtp"/><path class="ohfs0hakv"/><path class="hwanmkeov"/><path clip-rule="evenodd" class="gkefinb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-share-duotone"} {...others} />);
}

export default Component;
