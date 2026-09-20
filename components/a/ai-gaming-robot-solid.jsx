import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et40e2byb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="et40e2byb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-gaming-robot-solid"} {...others} />);
}

export default Component;
