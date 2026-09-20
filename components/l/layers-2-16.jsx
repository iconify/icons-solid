import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlxr77pgx.css';
import '../../css/j/jrey48bji.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zlxr77pgx"/><path class="jrey48bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layers-2-16"} {...others} />);
}

export default Component;
