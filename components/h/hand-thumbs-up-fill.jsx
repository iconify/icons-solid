import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkk31pxxs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kkk31pxxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hand-thumbs-up-fill"} {...others} />);
}

export default Component;
