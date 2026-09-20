import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2mynzb2c.css';
import '../../css/v/v1qwv7bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l2mynzb2c"/><path class="v1qwv7bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-12"} {...others} />);
}

export default Component;
