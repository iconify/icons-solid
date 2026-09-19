import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mal-cabtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mal-cabtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:calendar-add-fill"} {...others} />);
}

export default Component;
