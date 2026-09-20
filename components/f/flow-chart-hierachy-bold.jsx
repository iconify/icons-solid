import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvn5oaboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nvn5oaboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flow-chart-hierachy-bold"} {...others} />);
}

export default Component;
