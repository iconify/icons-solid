import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htcr3kb3h.css';
import '../../css/a/ajkq-sngp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="htcr3kb3h"/><path class="ajkq-sngp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dropout"} {...others} />);
}

export default Component;
