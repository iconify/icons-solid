import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh5k_h5sj.css';
import '../../css/f/fw7m_cc5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nh5k_h5sj"/><path class="fw7m_cc5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:abyss"} {...others} />);
}

export default Component;
