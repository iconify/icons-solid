import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue4blbbkw.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="ue4blbbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:night-alt-lightning"} {...others} />);
}

export default Component;
