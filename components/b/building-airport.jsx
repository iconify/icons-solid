import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8p5vjk7k.css';
import '../../css/n/n4wmd7tdc.css';
import '../../css/d/duywhdcwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b8p5vjk7k"/><path class="n4wmd7tdc"/><path class="duywhdcwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-airport"} {...others} />);
}

export default Component;
