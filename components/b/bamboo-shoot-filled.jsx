import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brh8c5b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brh8c5b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bamboo-shoot-filled"} {...others} />);
}

export default Component;
