import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ye4fm_b9r.css';
import '../../css/z/z8yx5mbkz.css';
import '../../css/b/b-m5x99nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ye4fm_b9r"/><path class="z8yx5mbkz"/><path class="b-m5x99nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rice-bowl-02"} {...others} />);
}

export default Component;
