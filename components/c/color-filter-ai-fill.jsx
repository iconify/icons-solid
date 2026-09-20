import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa2wmjajw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa2wmjajw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:color-filter-ai-fill"} {...others} />);
}

export default Component;
