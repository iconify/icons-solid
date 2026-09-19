import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm7dj77gr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cm7dj77gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:delete"} {...others} />);
}

export default Component;
