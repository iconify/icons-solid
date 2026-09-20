import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka5_0n05d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ka5_0n05d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:folder-exclamation"} {...others} />);
}

export default Component;
