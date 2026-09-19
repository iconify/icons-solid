import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9h4qu6lx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u9h4qu6lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-letter-f"} {...others} />);
}

export default Component;
