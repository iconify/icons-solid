import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcreqacxs.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rcreqacxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-up-to-line"} {...others} />);
}

export default Component;
