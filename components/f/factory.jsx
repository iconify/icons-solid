import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa3ap3bcs.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pa3ap3bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:factory"} {...others} />);
}

export default Component;
