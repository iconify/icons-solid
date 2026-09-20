import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9wtmta2j.css';
import '../../css/v/valpkebar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9wtmta2j"/><path class="valpkebar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:book-flip-page"} {...others} />);
}

export default Component;
