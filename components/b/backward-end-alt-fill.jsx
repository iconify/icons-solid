import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glh0ax5dc.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="glh0ax5dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:backward-end-alt-fill"} {...others} />);
}

export default Component;
