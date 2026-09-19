import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwzd07w5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwzd07w5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:info-circle-outline"} {...others} />);
}

export default Component;
