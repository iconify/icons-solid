import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3cn1_tcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3cn1_tcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:helpdesk"} {...others} />);
}

export default Component;
