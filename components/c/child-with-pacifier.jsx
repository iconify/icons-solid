import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lrrm4dwyf.css';
import '../../css/c/c0fwccbye.css';
import '../../css/l/libg5db-c.css';
import '../../css/o/o86yh-b_x.css';
import '../../css/v/v9b8v-bva.css';
import '../../css/y/y2oirz4vi.css';
import '../../css/e/epu3p236q.css';
import '../../css/t/tu27cccno.css';
import '../../css/a/a2umqhb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="lrrm4dwyf"/><path class="c0fwccbye"/><path class="libg5db-c"/><path class="o86yh-b_x"/><path class="v9b8v-bva"/><path class="y2oirz4vi"/><path class="epu3p236q"/><path class="tu27cccno"/><path class="a2umqhb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:child-with-pacifier"} {...others} />);
}

export default Component;
