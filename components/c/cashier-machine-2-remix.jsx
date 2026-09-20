import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz5y4by4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wz5y4by4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cashier-machine-2-remix"} {...others} />);
}

export default Component;
