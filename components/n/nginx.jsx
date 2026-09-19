import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za-3b2xgq.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="za-3b2xgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:nginx"} {...others} />);
}

export default Component;
