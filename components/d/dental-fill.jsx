import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t54_tnbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t54_tnbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dental-fill"} {...others} />);
}

export default Component;
