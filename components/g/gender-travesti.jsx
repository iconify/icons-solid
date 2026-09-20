import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riq9a1zbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="riq9a1zbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gender-travesti"} {...others} />);
}

export default Component;
