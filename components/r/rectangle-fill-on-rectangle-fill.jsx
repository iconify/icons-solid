import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zml9i3ljd.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="zml9i3ljd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-fill-on-rectangle-fill"} {...others} />);
}

export default Component;
