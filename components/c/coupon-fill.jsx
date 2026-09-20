import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_zup3_vn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n_zup3_vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coupon-fill"} {...others} />);
}

export default Component;
