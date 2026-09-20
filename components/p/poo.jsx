import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1sd7lz6r.css';
import '../../css/i/i2d7xd63i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b1sd7lz6r"/><path class="i2d7xd63i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:poo"} {...others} />);
}

export default Component;
