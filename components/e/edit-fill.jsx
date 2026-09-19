import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa4k5mg7o.css';
import '../../css/z/za5m-1b2a.css';
import '../../css/b/b_zs5hbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xa4k5mg7o"/><path class="za5m-1b2a"/><path class="b_zs5hbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:edit-fill"} {...others} />);
}

export default Component;
