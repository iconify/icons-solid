import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj4l4600f.css';
import '../../css/q/qnh9ymbin.css';
import '../../css/s/s3nt3rbsc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nj4l4600f"/><path class="qnh9ymbin"/><path class="s3nt3rbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ocaml-wordmark"} {...others} />);
}

export default Component;
