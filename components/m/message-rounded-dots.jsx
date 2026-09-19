import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk2oa9bac.css';
import '../../css/m/m_i62lbim.css';
import '../../css/b/bhnv2njoo.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="lk2oa9bac"/><circle class="m_i62lbim"/><path class="bhnv2njoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-rounded-dots"} {...others} />);
}

export default Component;
