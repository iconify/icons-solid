import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k42f7rbgv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="k42f7rbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-delete-2"} {...others} />);
}

export default Component;
