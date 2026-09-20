import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyltgdbjy.css';
import '../../css/z/z5425fk9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eyltgdbjy"/><path class="z5425fk9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:apple"} {...others} />);
}

export default Component;
