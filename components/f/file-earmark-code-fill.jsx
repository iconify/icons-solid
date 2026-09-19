import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysga9xgmy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ysga9xgmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-code-fill"} {...others} />);
}

export default Component;
