import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bose8-bou.css';
import '../../css/e/er-gjfemd.css';
import '../../css/y/yh97xd9ai.css';
import '../../css/z/zwbzsgbuk.css';
import '../../css/d/drcv5vb1v.css';
import '../../css/a/a3sbb9bcg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bose8-bou"/><path class="er-gjfemd"/><path class="yh97xd9ai"/><path class="zwbzsgbuk"/><path class="drcv5vb1v"/><path class="a3sbb9bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kubeflow"} {...others} />);
}

export default Component;
