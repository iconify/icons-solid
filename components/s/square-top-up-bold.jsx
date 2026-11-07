import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw3onyotj.css';
import '../../css/z/zfllz3bry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw3onyotj"/><path class="zfllz3bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-top-up-bold"} {...others} />);
}

export default Component;
