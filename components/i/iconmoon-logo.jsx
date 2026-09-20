import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/ojk58ub1b.css';
import '../../css/j/j697l3uzc.css';
import '../../css/s/syho5phjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ojk58ub1b"/><path class="j697l3uzc"/><path class="syho5phjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:iconmoon-logo"} {...others} />);
}

export default Component;
