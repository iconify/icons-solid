import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcglrybdp.css';
import '../../css/k/k74euduoi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcglrybdp"/><path class="k74euduoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-add-bold"} {...others} />);
}

export default Component;
