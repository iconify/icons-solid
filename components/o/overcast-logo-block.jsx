import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3m_2pbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v3m_2pbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:overcast-logo-block"} {...others} />);
}

export default Component;
