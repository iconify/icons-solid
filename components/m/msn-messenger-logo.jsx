import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oyrktuagv.css';
import '../../css/x/xz6rr6bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="oyrktuagv"/><path class="xz6rr6bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:msn-messenger-logo"} {...others} />);
}

export default Component;
