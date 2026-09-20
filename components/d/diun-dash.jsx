import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbz35uxob.css';
import '../../css/o/ogk33obpt.css';
import '../../css/f/f6jdgbjxg.css';
import '../../css/s/s60bmubhr.css';
import '../../css/o/oya_uezyy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pbz35uxob"/><path class="ogk33obpt"/><path class="f6jdgbjxg"/><path class="s60bmubhr"/><path class="oya_uezyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:diun-dash"} {...others} />);
}

export default Component;
