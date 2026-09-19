import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lswr9wrdr.css';
import '../../css/u/unos9unxq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lswr9wrdr"/><path class="unos9unxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notebook-reference"} {...others} />);
}

export default Component;
