import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5e2eg6_z.css';
import '../../css/w/wc7nz197r.css';
import '../../css/y/y3pflbcoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z5e2eg6_z"/><circle class="wc7nz197r"/><path class="y3pflbcoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:image"} {...others} />);
}

export default Component;
