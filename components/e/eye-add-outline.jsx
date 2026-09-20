import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc1cj_fzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc1cj_fzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:eye-add-outline"} {...others} />);
}

export default Component;
