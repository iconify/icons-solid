import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw9n2obat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw9n2obat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:contract-right-fill"} {...others} />);
}

export default Component;
