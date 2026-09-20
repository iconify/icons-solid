import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye9nqmbve.css';
import '../../css/w/wo2kix3uq.css';
import '../../css/i/ijwz2bbji.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ye9nqmbve"/><path class="wo2kix3uq"/><path class="ijwz2bbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:add-bookmark"} {...others} />);
}

export default Component;
