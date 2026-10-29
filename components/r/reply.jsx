import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc0n60bbf.css';
import '../../css/r/rhj16tblu.css';
import '../../css/c/c4ckab3nr.css';
import '../../css/u/u-c2dpbwy.css';
import '../../css/t/t5mvquyuz.css';
import '../../css/k/k6hshz3jg.css';
import '../../css/s/sc79dgj-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gc0n60bbf wm-shadow"/><path class="rhj16tblu wm-k"/><path class="c4ckab3nr wm-k"/><path class="u-c2dpbwy wm-k"/><path class="t5mvquyuz wm-k"/><path class="k6hshz3jg wm-k"/><path class="sc79dgj-m wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:reply"} {...others} />);
}

export default Component;
