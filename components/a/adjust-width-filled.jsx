import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw98_2wjg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pw98_2wjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:adjust-width-filled"} {...others} />);
}

export default Component;
