import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8nmi9b7f.css';
import '../../css/l/la22zob0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8nmi9b7f"/><path class="la22zob0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-text-1-bold"} {...others} />);
}

export default Component;
