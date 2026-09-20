import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_li8cc6d.css';
import '../../css/t/t9ck36orq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_li8cc6d"/><path class="t9ck36orq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-seven"} {...others} />);
}

export default Component;
