import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6k78tbxq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q6k78tbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:database-nut-hex"} {...others} />);
}

export default Component;
