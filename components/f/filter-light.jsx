import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb-7nfbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kb-7nfbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:filter-light"} {...others} />);
}

export default Component;
