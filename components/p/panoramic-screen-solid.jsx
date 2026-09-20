import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgy8--9nd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jgy8--9nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:panoramic-screen-solid"} {...others} />);
}

export default Component;
