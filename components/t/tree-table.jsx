import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbwtn-biq.css';
import '../../css/e/e7ttr_boe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gbwtn-biq"/><path class="e7ttr_boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:tree-table"} {...others} />);
}

export default Component;
