import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4xr-1bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h4xr-1bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:keyboard-solid"} {...others} />);
}

export default Component;
