import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afl8jx6mv.css';
import '../../css/u/u4xq7tb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afl8jx6mv"/><path clip-rule="evenodd" class="u4xq7tb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:info-triangle-outline"} {...others} />);
}

export default Component;
