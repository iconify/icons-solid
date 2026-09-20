import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk-n75bex.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="dk-n75bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:prescription-pills-drugs-healthcare"} {...others} />);
}

export default Component;
