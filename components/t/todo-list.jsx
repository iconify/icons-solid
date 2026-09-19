import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhxi0-bnb.css';
import '../../css/u/u3fkkvb-o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fhxi0-bnb"/><path class="u3fkkvb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:todo-list"} {...others} />);
}

export default Component;
