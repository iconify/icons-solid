import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h29-mkxmi.css';
import '../../css/d/d4ur63wtm.css';
import '../../css/i/ih216efdz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h29-mkxmi"/><path clip-rule="evenodd" class="d4ur63wtm"/><path class="ih216efdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:swiss-knife-16"} {...others} />);
}

export default Component;
