import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lub4f059b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lub4f059b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:code-pull-request-xmark"} {...others} />);
}

export default Component;
