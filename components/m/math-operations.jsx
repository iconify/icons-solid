import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvopj_b_a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uvopj_b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:math-operations"} {...others} />);
}

export default Component;
