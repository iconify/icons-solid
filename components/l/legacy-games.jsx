import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl0ccq7rn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl0ccq7rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:legacy-games"} {...others} />);
}

export default Component;
