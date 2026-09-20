import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syp_70bml.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="syp_70bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:download-stack-remix"} {...others} />);
}

export default Component;
