import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuxggqbqp.css';
import '../../css/m/mq95odb1g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vuxggqbqp"/><path class="mq95odb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:link"} {...others} />);
}

export default Component;
