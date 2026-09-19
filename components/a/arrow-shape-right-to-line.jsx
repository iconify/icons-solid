import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j37dud1kz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j37dud1kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-shape-right-to-line"} {...others} />);
}

export default Component;
