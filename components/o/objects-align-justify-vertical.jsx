import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgs3vg2ku.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vgs3vg2ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:objects-align-justify-vertical"} {...others} />);
}

export default Component;
