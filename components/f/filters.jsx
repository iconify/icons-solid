import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-4bk_b4n.css';
import '../../css/n/n5s4vsbpi.css';
import '../../css/c/cs6389b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o-4bk_b4n"/><path class="n5s4vsbpi"/><path class="cs6389b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filters"} {...others} />);
}

export default Component;
