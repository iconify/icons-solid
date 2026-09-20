import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1shg7kbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m1shg7kbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:border-bottom-remix"} {...others} />);
}

export default Component;
