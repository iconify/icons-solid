import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdz5pm-xw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wdz5pm-xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:reason-studios-logo-block"} {...others} />);
}

export default Component;
