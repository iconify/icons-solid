import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kda-sptxe.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="kda-sptxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:snowflake-1"} {...others} />);
}

export default Component;
