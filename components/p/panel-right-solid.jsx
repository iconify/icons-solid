import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_vskm2fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_vskm2fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-right-solid"} {...others} />);
}

export default Component;
