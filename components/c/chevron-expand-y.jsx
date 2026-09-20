import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2n0ibczg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2n0ibczg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chevron-expand-y"} {...others} />);
}

export default Component;
