import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjg98wbmn.css';
import '../../css/m/m889_pbai.css';
import '../../css/u/uh4pez9bc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sjg98wbmn"/><path class="m889_pbai"/><path class="uh4pez9bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-flip-vertical-up"} {...others} />);
}

export default Component;
