import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu1-mmbtf.css';
import '../../css/n/n3w3yo25d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uu1-mmbtf"/><path class="n3w3yo25d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:file-import"} {...others} />);
}

export default Component;
