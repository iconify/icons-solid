import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2nt4m_0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e2nt4m_0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-3"} {...others} />);
}

export default Component;
