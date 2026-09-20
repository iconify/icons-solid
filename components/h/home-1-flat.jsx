import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq4_tk9zy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tq4_tk9zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:home-1-flat"} {...others} />);
}

export default Component;
