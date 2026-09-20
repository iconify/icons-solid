import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1pennbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1pennbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vintage-tv-4-bold"} {...others} />);
}

export default Component;
