import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b39hs-f5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b39hs-f5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:theater-masks"} {...others} />);
}

export default Component;
