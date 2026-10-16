import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o63iyfbss.css';
import '../../css/t/tmavxu-df.css';
import '../../css/u/u7fpslg-e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o63iyfbss"/><path class="tmavxu-df"/><path class="u7fpslg-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-burner-20"} {...others} />);
}

export default Component;
