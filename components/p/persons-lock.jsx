import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8k2tzb2b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j8k2tzb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:persons-lock"} {...others} />);
}

export default Component;
