import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkd5oxl6c.css';
import '../../css/b/bc_ody0we.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fkd5oxl6c"/><path class="bc_ody0we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:arrow-circle-right-o"} {...others} />);
}

export default Component;
