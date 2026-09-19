import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9hw_hbtw.css';
import '../../css/j/jej-4abki.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v9hw_hbtw"/><path class="jej-4abki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:character-whole-number"} {...others} />);
}

export default Component;
