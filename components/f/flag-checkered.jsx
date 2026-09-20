import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6bqpgb6d.css';
import '../../css/r/rasj23r5y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v6bqpgb6d"/><path class="rasj23r5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:flag-checkered"} {...others} />);
}

export default Component;
