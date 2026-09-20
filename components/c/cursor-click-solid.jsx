import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu0z4-bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tu0z4-bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cursor-click-solid"} {...others} />);
}

export default Component;
