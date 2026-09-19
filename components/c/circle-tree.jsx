import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-2g7-zdt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q-2g7-zdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-tree"} {...others} />);
}

export default Component;
