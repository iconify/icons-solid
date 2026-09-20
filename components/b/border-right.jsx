import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8sh_rchi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8sh_rchi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:border-right"} {...others} />);
}

export default Component;
