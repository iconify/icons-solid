import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwt7dmi2n.css';
import '../../css/c/c8k9rbbql.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gwt7dmi2n"/><path class="c8k9rbbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:check-square-o"} {...others} />);
}

export default Component;
