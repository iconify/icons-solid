import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exa614c9q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="exa614c9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:minus"} {...others} />);
}

export default Component;
