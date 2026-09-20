import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctkrq_x0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ctkrq_x0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:button-fast-forward-2-remix"} {...others} />);
}

export default Component;
