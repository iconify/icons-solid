import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcc0w7qat.css';
import '../../css/a/aqwncob1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcc0w7qat"/><path class="aqwncob1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:headphones-slash-solid"} {...others} />);
}

export default Component;
