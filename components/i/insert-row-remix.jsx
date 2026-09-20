import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlqn90vhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wlqn90vhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:insert-row-remix"} {...others} />);
}

export default Component;
