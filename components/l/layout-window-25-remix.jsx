import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnv1cu90a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vnv1cu90a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:layout-window-25-remix"} {...others} />);
}

export default Component;
