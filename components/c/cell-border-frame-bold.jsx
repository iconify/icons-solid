import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z56x6q5sj.css';
import '../../css/q/qwgvg7v0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z56x6q5sj"/><path class="qwgvg7v0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cell-border-frame-bold"} {...others} />);
}

export default Component;
