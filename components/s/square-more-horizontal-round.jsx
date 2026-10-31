import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdgx7fuwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdgx7fuwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-more-horizontal-round"} {...others} />);
}

export default Component;
