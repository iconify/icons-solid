import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iky8m_bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iky8m_bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dot-circle-fill"} {...others} />);
}

export default Component;
