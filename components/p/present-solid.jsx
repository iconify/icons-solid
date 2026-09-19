import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmsdlybyh.css';
import '../../css/u/ulimznb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tmsdlybyh"/><path class="ulimznb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:present-solid"} {...others} />);
}

export default Component;
