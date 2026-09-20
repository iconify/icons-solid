import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz-342bwo.css';
import '../../css/q/qw0rhm64r.css';
import '../../css/i/i5c88j1ev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cz-342bwo"/><circle class="qw0rhm64r"/><path class="i5c88j1ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cricket-wicket"} {...others} />);
}

export default Component;
