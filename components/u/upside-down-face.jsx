import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/o/otit0l4ks.css';
import '../../css/u/uwsmjnb9k.css';
import '../../css/a/alabn_bfc.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><circle class="otit0l4ks"/><path class="uwsmjnb9k"/><path class="alabn_bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:upside-down-face"} {...others} />);
}

export default Component;
