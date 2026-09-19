import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-89ctltc.css';
import '../../css/u/u0q7hiszd.css';
import '../../css/k/ktk7rfg2u.css';

const viewBox = {"width":100,"height":100};
const content = `<defs><path id="SVGyTAqHegd" class="a-89ctltc"/></defs><path class="u0q7hiszd"/><use href="#SVGyTAqHegd" class="ktk7rfg2u"/><use href="#SVGyTAqHegd" class="ktk7rfg2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-alt-edit"} {...others} />);
}

export default Component;
