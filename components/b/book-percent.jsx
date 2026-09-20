import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdd_2cbom.css';
import '../../css/e/e-z6fbc7o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pdd_2cbom"/><path class="e-z6fbc7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:book-percent"} {...others} />);
}

export default Component;
