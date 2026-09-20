import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a20-u-bva.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="a20-u-bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:order-abnormal-filled"} {...others} />);
}

export default Component;
