import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/v/v-ccfeb3g.css';
import '../../css/q/q8r41zslw.css';
import '../../css/t/tq4uix4bz.css';
import '../../css/v/vik-4dbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="v-ccfeb3g"/><path class="q8r41zslw"/><path class="tq4uix4bz"/><path class="vik-4dbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:checklist-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
