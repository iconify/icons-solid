import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2e3knbpj.css';
import '../../css/n/n38mbh-2w.css';
import '../../css/l/lm2ism19n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o2e3knbpj"/><path class="n38mbh-2w"/><path class="lm2ism19n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:metatana"} {...others} />);
}

export default Component;
