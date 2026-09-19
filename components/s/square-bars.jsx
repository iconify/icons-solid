import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8crd06px.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n8crd06px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:square-bars"} {...others} />);
}

export default Component;
