import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjnuvtb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjnuvtb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:end-point-arrow"} {...others} />);
}

export default Component;
