import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujwr_lkax.css';
import '../../css/c/c7cgn4zwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujwr_lkax"/><path class="c7cgn4zwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-arrow-up"} {...others} />);
}

export default Component;
