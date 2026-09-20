import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejos-9bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejos-9bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-lol-sideways-bold"} {...others} />);
}

export default Component;
