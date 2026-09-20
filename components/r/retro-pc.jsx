import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot1g9j7yp.css';
import '../../css/f/fh44hvb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot1g9j7yp"/><path class="fh44hvb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:retro-pc"} {...others} />);
}

export default Component;
