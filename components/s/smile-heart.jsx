import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0q4cdc_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0q4cdc_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:smile-heart"} {...others} />);
}

export default Component;
