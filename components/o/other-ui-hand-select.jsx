import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os8-e4jzp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="os8-e4jzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-hand-select"} {...others} />);
}

export default Component;
