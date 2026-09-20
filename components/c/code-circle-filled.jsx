import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/z/zm9dbfsnf.css';
import '../../css/a/acpi4-bga.css';
import '../../css/b/b23ukybps.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGmI9kXcFz"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="zm9dbfsnf"/><path class="acpi4-bga"/><path class="b23ukybps"/></g></mask></defs><circle mask="url(#SVGmI9kXcFz)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:code-circle-filled"} {...others} />);
}

export default Component;
