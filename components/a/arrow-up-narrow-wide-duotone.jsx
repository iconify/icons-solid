import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vpj4m7rea.css';
import '../../css/l/lbe7xcbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vpj4m7rea"/><path class="lbe7xcbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-narrow-wide-duotone"} {...others} />);
}

export default Component;
