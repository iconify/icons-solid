import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5b2csbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5b2csbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:light-mode-bright-dark-bold"} {...others} />);
}

export default Component;
