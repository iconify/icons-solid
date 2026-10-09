import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at36eqb4a.css';
import '../../css/h/hfk-_-6tj.css';
import '../../css/v/vmzapni5c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="at36eqb4a"/><path class="hfk-_-6tj"/><path class="vmzapni5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grant-20-bold"} {...others} />);
}

export default Component;
