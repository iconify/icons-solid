import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpax6j6zn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rpax6j6zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:keyboard"} {...others} />);
}

export default Component;
