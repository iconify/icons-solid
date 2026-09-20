import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1rmevb5d.css';
import '../../css/s/sa9ni4pvz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w1rmevb5d"/><path class="sa9ni4pvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:newspaper"} {...others} />);
}

export default Component;
