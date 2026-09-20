import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut7h2oafm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut7h2oafm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tumblr-logo-solid"} {...others} />);
}

export default Component;
