import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxt49qctb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uxt49qctb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-zoom-out"} {...others} />);
}

export default Component;
