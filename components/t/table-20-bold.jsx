import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i48le1b7u.css';
import '../../css/w/wx0wzhb6i.css';
import '../../css/a/amp8719fc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i48le1b7u"/><path class="wx0wzhb6i"/><path class="amp8719fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-20-bold"} {...others} />);
}

export default Component;
