import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgf0afa9t.css';
import '../../css/a/avoltjbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rgf0afa9t"/><rect class="avoltjbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bandage"} {...others} />);
}

export default Component;
