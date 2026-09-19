import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdi_z7bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdi_z7bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:close-square-bold"} {...others} />);
}

export default Component;
