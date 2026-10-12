import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o72q1jmah.css';
import '../../css/j/j11y15vpo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o72q1jmah"/><path class="j11y15vpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-error-fill-20"} {...others} />);
}

export default Component;
