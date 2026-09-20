import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp3iq2bbn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="cp3iq2bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-fold-down-left"} {...others} />);
}

export default Component;
