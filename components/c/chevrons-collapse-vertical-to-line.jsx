import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn_vi9bnk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sn_vi9bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:chevrons-collapse-vertical-to-line"} {...others} />);
}

export default Component;
