import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evt2zjc8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evt2zjc8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bank-fill"} {...others} />);
}

export default Component;
