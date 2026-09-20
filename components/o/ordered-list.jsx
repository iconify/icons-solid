import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rga9k2rpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rga9k2rpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ordered-list"} {...others} />);
}

export default Component;
