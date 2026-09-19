import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fra-0totj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fra-0totj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:square-brackets-letter-a"} {...others} />);
}

export default Component;
