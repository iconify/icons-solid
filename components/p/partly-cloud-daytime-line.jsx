import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzh4x-bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzh4x-bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:partly-cloud-daytime-line"} {...others} />);
}

export default Component;
