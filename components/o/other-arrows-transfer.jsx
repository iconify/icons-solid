import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t94-lt9lq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t94-lt9lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-arrows-transfer"} {...others} />);
}

export default Component;
