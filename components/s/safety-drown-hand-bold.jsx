import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_yxr0bmx.css';
import '../../css/t/t2eelrkyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_yxr0bmx"/><path class="t2eelrkyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-drown-hand-bold"} {...others} />);
}

export default Component;
