import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmm6kfbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmm6kfbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-fill"} {...others} />);
}

export default Component;
