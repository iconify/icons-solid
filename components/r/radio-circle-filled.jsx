import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/i/i6u3v9bup.css';
import '../../css/a/a7jpzibdv.css';
import '../../css/l/l0p7own5h.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGfigzKVIQ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="i6u3v9bup"/><path class="a7jpzibdv"/><path clip-rule="evenodd" class="l0p7own5h"/></g></mask></defs><circle mask="url(#SVGfigzKVIQ)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:radio-circle-filled"} {...others} />);
}

export default Component;
