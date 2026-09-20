import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi0lwub-e.css';
import '../../css/e/eekz3efxq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vi0lwub-e"/><path class="eekz3efxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:random"} {...others} />);
}

export default Component;
