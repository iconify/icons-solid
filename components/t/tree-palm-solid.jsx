import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hax9i4bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hax9i4bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:tree-palm-solid"} {...others} />);
}

export default Component;
