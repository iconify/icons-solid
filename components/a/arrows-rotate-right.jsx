import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy9u_gbwh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hy9u_gbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrows-rotate-right"} {...others} />);
}

export default Component;
