import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl3t-8q6w.css';
import '../../css/m/m6ntpracs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl3t-8q6w"/><path clip-rule="evenodd" class="m6ntpracs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-onedrive-logo-2-solid"} {...others} />);
}

export default Component;
