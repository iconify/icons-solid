import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-p5e-beu.css';
import '../../css/o/oe8kfdbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-p5e-beu"/><path class="oe8kfdbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:messages-circle-filled"} {...others} />);
}

export default Component;
