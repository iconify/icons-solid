import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z748_ebdy.css';
import '../../css/e/e7vpmh2zb.css';
import '../../css/z/zsw4udyjx.css';
import '../../css/z/zvp_pt6pp.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="z748_ebdy"/><path class="e7vpmh2zb"/><path class="zsw4udyjx"/><path class="zvp_pt6pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ph-4x3"} {...others} />);
}

export default Component;
