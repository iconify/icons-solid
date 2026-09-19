import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh9roon6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mh9roon6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-arrow-up"} {...others} />);
}

export default Component;
