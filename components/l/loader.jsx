import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkjlqpuwg.css';
import '../../css/e/ezwyswb-m.css';
import '../../css/i/iv-t8jimj.css';
import '../../css/c/c9rrsb19p.css';
import '../../css/g/gqit96npu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkjlqpuwg wm-shadow"/><path class="ezwyswb-m wm-k"/><path class="iv-t8jimj wm-k"/><path class="c9rrsb19p wm-a"/><path class="gqit96npu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:loader"} {...others} />);
}

export default Component;
