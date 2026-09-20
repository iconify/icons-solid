import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy7q00b8z.css';
import '../../css/l/lbxyuzatw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cy7q00b8z"/><path class="lbxyuzatw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:external-link-solid"} {...others} />);
}

export default Component;
