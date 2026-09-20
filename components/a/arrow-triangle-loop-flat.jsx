import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8o24499m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s8o24499m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-triangle-loop-flat"} {...others} />);
}

export default Component;
