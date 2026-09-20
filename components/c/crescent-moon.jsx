import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awuue74qq.css';
import '../../css/x/xifi78b-g.css';
import '../../css/b/b0z0amxzy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="awuue74qq"/><path class="xifi78b-g"/><path class="b0z0amxzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crescent-moon"} {...others} />);
}

export default Component;
