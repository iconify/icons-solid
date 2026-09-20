import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp9_yjb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zp9_yjb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:baggage-remix"} {...others} />);
}

export default Component;
