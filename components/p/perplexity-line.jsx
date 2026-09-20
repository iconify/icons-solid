import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm2x4mzsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sm2x4mzsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:perplexity-line"} {...others} />);
}

export default Component;
