import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0rhc6bwk.css';
import '../../css/v/v73yovbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0rhc6bwk"/><path class="v73yovbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wndr"} {...others} />);
}

export default Component;
