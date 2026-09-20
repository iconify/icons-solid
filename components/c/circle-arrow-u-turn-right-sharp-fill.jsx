import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b26ky1b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b26ky1b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-u-turn-right-sharp-fill"} {...others} />);
}

export default Component;
