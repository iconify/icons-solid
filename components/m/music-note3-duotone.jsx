import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6l8xqbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b6l8xqbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-note3-duotone"} {...others} />);
}

export default Component;
