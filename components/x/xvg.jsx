import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waj_2hban.css';
import '../../css/z/z4hja-bet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="waj_2hban"/><path class="z4hja-bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xvg"} {...others} />);
}

export default Component;
