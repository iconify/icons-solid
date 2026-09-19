import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdltmv-sf.css';
import '../../css/g/gl2m_3bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdltmv-sf"/><path class="gl2m_3bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-cog-filled"} {...others} />);
}

export default Component;
