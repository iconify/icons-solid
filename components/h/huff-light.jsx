import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-29-dopm.css';
import '../../css/o/okgd0ab2p.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="z-29-dopm"/><path class="okgd0ab2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:huff-light"} {...others} />);
}

export default Component;
