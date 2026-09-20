import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt3s2tbac.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vt3s2tbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:jira-software-logo-1-block"} {...others} />);
}

export default Component;
