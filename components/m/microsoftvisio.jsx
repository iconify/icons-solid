import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnr4hs01v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnr4hs01v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:microsoftvisio"} {...others} />);
}

export default Component;
