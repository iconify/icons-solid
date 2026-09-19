import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwx_n2boy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pwx_n2boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:link-slash"} {...others} />);
}

export default Component;
