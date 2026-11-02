import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2wim-bik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2wim-bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-pull-request-draft-line"} {...others} />);
}

export default Component;
