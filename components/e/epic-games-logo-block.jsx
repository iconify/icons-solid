import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjte8zblv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mjte8zblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:epic-games-logo-block"} {...others} />);
}

export default Component;
