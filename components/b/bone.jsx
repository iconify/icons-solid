import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s52zm8mgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s52zm8mgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bone"} {...others} />);
}

export default Component;
