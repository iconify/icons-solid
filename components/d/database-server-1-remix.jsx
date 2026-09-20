import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_s86eyys.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="m_s86eyys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-server-1-remix"} {...others} />);
}

export default Component;
