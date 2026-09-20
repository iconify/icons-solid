import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrpz53bmr.css';
import '../../css/g/gepwz6jff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrpz53bmr"/><path class="gepwz6jff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tea-pot-bold"} {...others} />);
}

export default Component;
