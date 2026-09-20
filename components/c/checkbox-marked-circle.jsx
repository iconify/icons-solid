import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rose2n_gr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rose2n_gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-marked-circle"} {...others} />);
}

export default Component;
