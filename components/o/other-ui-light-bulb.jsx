import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvswe7bnc.css';
import '../../css/o/of3lo06ag.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fvswe7bnc"/><path class="of3lo06ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-light-bulb"} {...others} />);
}

export default Component;
