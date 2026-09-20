import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh7ouzyov.css';
import '../../css/l/l14k1ybbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vh7ouzyov"/><path clip-rule="evenodd" class="l14k1ybbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:yarn"} {...others} />);
}

export default Component;
