import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/f/f8ne6yb3c.css';
import '../../css/x/xi88efb4t.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="f8ne6yb3c"/><path class="xi88efb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sierra-leone"} {...others} />);
}

export default Component;
