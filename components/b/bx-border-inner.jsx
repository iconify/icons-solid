import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy91t1bnu.css';
import '../../css/n/nas02gbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy91t1bnu"/><path class="nas02gbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-border-inner"} {...others} />);
}

export default Component;
