import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fglykybgg.css';
import '../../css/d/ds0cuq6_c.css';
import '../../css/o/owek2_9rb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fglykybgg"/><path class="ds0cuq6_c"/><path class="owek2_9rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-film-camrea"} {...others} />);
}

export default Component;
