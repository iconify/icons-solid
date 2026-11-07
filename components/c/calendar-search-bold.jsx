import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2fxdh14r.css';
import '../../css/e/e_29zdb8m.css';
import '../../css/c/c1r3dshtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h2fxdh14r"/><path class="e_29zdb8m"/><path class="c1r3dshtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-search-bold"} {...others} />);
}

export default Component;
