import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_jrh9c3a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m_jrh9c3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:1-circle-fill"} {...others} />);
}

export default Component;
