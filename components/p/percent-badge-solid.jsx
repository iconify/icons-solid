import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg4id_vou.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eg4id_vou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:percent-badge-solid"} {...others} />);
}

export default Component;
