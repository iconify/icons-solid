import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxpo9jkdm.css';
import '../../css/x/xg28s7bkq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zxpo9jkdm"/><path class="xg28s7bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:travel-wayfinding-balloon"} {...others} />);
}

export default Component;
