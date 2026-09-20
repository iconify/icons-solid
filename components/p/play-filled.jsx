import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqp4cw_dd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nqp4cw_dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:play-filled"} {...others} />);
}

export default Component;
