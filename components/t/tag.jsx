import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fk7u5-mbu.css';
import '../../css/d/dm8n7ubqk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="fk7u5-mbu"/><path class="dm8n7ubqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:tag"} {...others} />);
}

export default Component;
