import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at62glbnv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="at62glbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:paint-roll-brush-16"} {...others} />);
}

export default Component;
