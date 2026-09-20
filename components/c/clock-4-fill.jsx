import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc-mrmbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mc-mrmbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-4-fill"} {...others} />);
}

export default Component;
