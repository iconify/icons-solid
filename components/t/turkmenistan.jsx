import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avaz35vcl.css';
import '../../css/d/d6irxobcr.css';
import '../../css/s/s9f_vlb8b.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="avaz35vcl"/><path class="d6irxobcr"/><path class="s9f_vlb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:turkmenistan"} {...others} />);
}

export default Component;
