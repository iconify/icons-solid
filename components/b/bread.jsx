import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7l63nn2k.css';
import '../../css/c/cyoc450ia.css';
import '../../css/f/f2-jmjb8m.css';
import '../../css/a/aglcrzbzz.css';
import '../../css/q/qucn62itk.css';
import '../../css/i/iv4kb_uou.css';
import '../../css/t/t7gimac2q.css';
import '../../css/d/d9gmh1bus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7l63nn2k wm-shadow"/><path class="cyoc450ia wm-k"/><path class="f2-jmjb8m wm-k"/><path class="aglcrzbzz wm-k"/><path class="qucn62itk wm-k"/><path class="iv4kb_uou wm-k"/><path class="t7gimac2q wm-shine"/><path class="d9gmh1bus wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bread"} {...others} />);
}

export default Component;
