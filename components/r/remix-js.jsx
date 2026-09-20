import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga6k13bfd.css';
import '../../css/e/e7xhl5x5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ga6k13bfd"/><path class="e7xhl5x5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:remix-js"} {...others} />);
}

export default Component;
