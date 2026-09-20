import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h406zcb0o.css';
import '../../css/w/wgfd128tk.css';
import '../../css/a/a05vi56mf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="h406zcb0o"/><rect class="wgfd128tk"/><path class="a05vi56mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-vertical-justify-start"} {...others} />);
}

export default Component;
