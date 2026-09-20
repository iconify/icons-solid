import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiajmhv2g.css';
import '../../css/l/l0nhtrb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiajmhv2g"/><path class="l0nhtrb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-bookmark-bold"} {...others} />);
}

export default Component;
