import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmy2s3qlv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kmy2s3qlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:neovim-wordmark"} {...others} />);
}

export default Component;
