import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnnwlwbti.css';
import '../../css/y/y4a8f1y-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lnnwlwbti"/><path clip-rule="evenodd" class="y4a8f1y-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:fire-outline"} {...others} />);
}

export default Component;
