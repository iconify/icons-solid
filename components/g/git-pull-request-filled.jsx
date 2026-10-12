import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrg2b27ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrg2b27ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-pull-request-filled"} {...others} />);
}

export default Component;
