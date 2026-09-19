import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko_c4j18e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ko_c4j18e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:volume-off-fill"} {...others} />);
}

export default Component;
