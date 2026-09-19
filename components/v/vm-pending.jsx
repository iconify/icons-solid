import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcf0dwdjd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zcf0dwdjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:vm-pending"} {...others} />);
}

export default Component;
