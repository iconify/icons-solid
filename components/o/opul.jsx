import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6p8koql.css';
import '../../css/m/m_pzdih5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oj6p8koql"/><path class="m_pzdih5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:opul"} {...others} />);
}

export default Component;
