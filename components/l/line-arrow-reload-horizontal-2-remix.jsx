import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tntdz1o6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tntdz1o6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:line-arrow-reload-horizontal-2-remix"} {...others} />);
}

export default Component;
