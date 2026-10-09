import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1np659_m.css';
import '../../css/n/n180x7juo.css';
import '../../css/j/jwnchgn9i.css';
import '../../css/j/j8k9-bcng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x1np659_m"/><path class="n180x7juo"/><path class="jwnchgn9i"/><path class="j8k9-bcng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:portable-solar-20-bold"} {...others} />);
}

export default Component;
