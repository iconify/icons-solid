import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcvz5dbex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcvz5dbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:unreal-engine"} {...others} />);
}

export default Component;
