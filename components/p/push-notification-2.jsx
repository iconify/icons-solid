import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh2y6xbeo.css';
import '../../css/y/yx6kzzz_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh2y6xbeo"/><path class="yx6kzzz_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:push-notification-2"} {...others} />);
}

export default Component;
