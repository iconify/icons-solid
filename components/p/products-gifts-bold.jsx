import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp_qx42gu.css';
import '../../css/u/u-xzs4btq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp_qx42gu"/><path class="u-xzs4btq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:products-gifts-bold"} {...others} />);
}

export default Component;
