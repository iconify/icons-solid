import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-eltu37y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="g-eltu37y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-shape-down-from-line"} {...others} />);
}

export default Component;
