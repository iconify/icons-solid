import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xznyf5bpe.css';
import '../../css/e/emyk_ebyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xznyf5bpe"/><path class="emyk_ebyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:duplicate"} {...others} />);
}

export default Component;
