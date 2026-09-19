import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9084iy4v.css';
import '../../css/w/w78rzcbvq.css';
import '../../css/k/kuk6t8bzw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="v9084iy4v"/><path class="w78rzcbvq"/><path class="kuk6t8bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:account-book-twotone"} {...others} />);
}

export default Component;
