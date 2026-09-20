import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a22os6vlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a22os6vlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sort-fill"} {...others} />);
}

export default Component;
