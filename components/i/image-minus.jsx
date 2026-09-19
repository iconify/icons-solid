import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jz0sh0_5j.css';
import '../../css/y/y4r4x_bib.css';
import '../../css/g/g8lzf8ygw.css';
import '../../css/k/kttxodbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jz0sh0_5j"/><circle class="y4r4x_bib"/><path class="g8lzf8ygw"/><path class="kttxodbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-minus"} {...others} />);
}

export default Component;
