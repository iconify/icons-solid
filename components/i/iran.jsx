import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/s/s22y7z9os.css';
import '../../css/y/yhov8zbzn.css';
import '../../css/d/dyfumibih.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="s22y7z9os"/><path class="yhov8zbzn"/><path class="dyfumibih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:iran"} {...others} />);
}

export default Component;
