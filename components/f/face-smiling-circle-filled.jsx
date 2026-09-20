import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/z2dg25zkk.css';
import '../../css/s/soq0hsbzs.css';
import '../../css/h/h5q-b7bfk.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGFzT7LwEy"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="z2dg25zkk"/><path clip-rule="evenodd" class="soq0hsbzs"/><path class="h5q-b7bfk"/></g></mask></defs><circle mask="url(#SVGFzT7LwEy)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:face-smiling-circle-filled"} {...others} />);
}

export default Component;
