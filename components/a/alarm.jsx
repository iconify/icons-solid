import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luh_gnorz.css';
import '../../css/o/o740cbcaj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="luh_gnorz"/><path class="o740cbcaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:alarm"} {...others} />);
}

export default Component;
