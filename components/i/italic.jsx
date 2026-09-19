import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o54lqebfr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o54lqebfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:italic"} {...others} />);
}

export default Component;
