import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge6e27bsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ge6e27bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:jira-software-logo-1-solid"} {...others} />);
}

export default Component;
