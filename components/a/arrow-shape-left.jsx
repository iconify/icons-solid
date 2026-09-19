import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul6fgxl1d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ul6fgxl1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-shape-left"} {...others} />);
}

export default Component;
