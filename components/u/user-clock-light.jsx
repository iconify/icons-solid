import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opg4asb0t.css';
import '../../css/l/lrijolbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opg4asb0t"/><path class="lrijolbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-clock-light"} {...others} />);
}

export default Component;
