import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b1h85pbcc.css';
import '../../css/b/b5k1ulb5x.css';
import '../../css/q/q_vv9aczd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b1h85pbcc"/><path class="b5k1ulb5x"/><path class="q_vv9aczd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lectern"} {...others} />);
}

export default Component;
