import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd_rldb6l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pd_rldb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-hash"} {...others} />);
}

export default Component;
