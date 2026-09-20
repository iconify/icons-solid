import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtcj7q16c.css';
import '../../css/y/yn4943o-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wtcj7q16c"/><path class="yn4943o-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:money-withdraw"} {...others} />);
}

export default Component;
