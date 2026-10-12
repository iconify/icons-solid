import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ann_yxbrh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ann_yxbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:box-expand-fill-20"} {...others} />);
}

export default Component;
