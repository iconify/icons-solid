import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vck01wbiq.css';
import '../../css/o/o-pj3zbcl.css';
import '../../css/n/n_sheacqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vck01wbiq"/><path class="o-pj3zbcl"/><path class="n_sheacqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-add-02"} {...others} />);
}

export default Component;
