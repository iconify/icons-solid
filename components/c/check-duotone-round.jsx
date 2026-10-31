import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld20vpmse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld20vpmse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:check-duotone-round"} {...others} />);
}

export default Component;
