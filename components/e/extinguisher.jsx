import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwi2rjbdb.css';

const viewBox = {"width":352,"height":520};
const content = `<path class="lwi2rjbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:extinguisher"} {...others} />);
}

export default Component;
