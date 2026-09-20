import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzgd0m_6f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hzgd0m_6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:car-sharing"} {...others} />);
}

export default Component;
