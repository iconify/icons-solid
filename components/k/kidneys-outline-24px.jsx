import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw_globds.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pw_globds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:kidneys-outline-24px"} {...others} />);
}

export default Component;
