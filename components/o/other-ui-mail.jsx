import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4bwg2bvq.css';
import '../../css/y/y7jxbyb3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y4bwg2bvq"/><path class="y7jxbyb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-mail"} {...others} />);
}

export default Component;
