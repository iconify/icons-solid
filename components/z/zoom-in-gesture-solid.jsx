import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7m_yyd2c.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="p7m_yyd2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:zoom-in-gesture-solid"} {...others} />);
}

export default Component;
