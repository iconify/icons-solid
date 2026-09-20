import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkah51bta.css';
import '../../css/h/h5gugn-ip.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mkah51bta"/><path class="h5gugn-ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:del"} {...others} />);
}

export default Component;
