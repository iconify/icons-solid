import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viuj30bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="viuj30bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:github"} {...others} />);
}

export default Component;
