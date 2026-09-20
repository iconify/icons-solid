import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6ry8-b9g.css';
import '../../css/t/tyh81m_bt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6ry8-b9g"/><path class="tyh81m_bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:link-solid"} {...others} />);
}

export default Component;
