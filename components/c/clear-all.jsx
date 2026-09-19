import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei-d5jmkw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ei-d5jmkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:clear-all"} {...others} />);
}

export default Component;
