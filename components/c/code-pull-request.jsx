import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7fxu2b5h.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n7fxu2b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:code-pull-request"} {...others} />);
}

export default Component;
