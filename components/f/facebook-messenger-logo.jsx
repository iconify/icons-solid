import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kq5ulfbrl.css';
import '../../css/s/sktwj-c6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="kq5ulfbrl"/><path class="sktwj-c6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:facebook-messenger-logo"} {...others} />);
}

export default Component;
